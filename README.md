Hola! estos son los pasos para correr el proyecto

Para inicializar el proyecto.

1 - Clonar repositorio. (git clone https://github.com/MatiasGonzalez97/servicio_tecnico.git)

2 - Correr en consola : npm i

3 - Crear la base de datos, hay un archivo en la raiz del proyecto llamado db.sql, el mismo posee el comando para crear una DB, ejecutar el mismo en su gestor de su DB.

4 - Configurar las variables de la conexión a la DB, estas se encuentran en config.js

5 - Una vez finalizado el paso 4, abriremos nuevamente la consola para correr las migraciones para la creación de tablas : npx sequelize db:migrate

6 - Finalizado el paso 5 procederemos a popular las tablas con Seeds, ejecutando por consola este comando : npx sequelize db:seed:all

7 - Cómo ultimo paso para levantar el servidor, en consola debemos correr : npm run dev


## Link al json de postman para poder probar los endpoints.
    https://www.getpostman.com/collections/030e5c8dafe01853fbed

## Endpoints dentro de la aplicacion y explicación de los mismos:
    Autos: 
        POST : /api/autos (Creacion de auto)
            Recibe : JSON con datos. EJ: 
                {
                    "marca" : "Toyota",
                    "anio" : 2012,
                    "patente":"asd123asd",
                    "color":"rodfjo",
                    "modelo" : "mitsubiyu",
                    "id_propietario" : 1
                }
            Respuesta : JSON con id del auto creado . EJ:
                {
                    "id_auto": 2
                }
        DELETE : /api/autos/1 (esto realizará un soft delete del auto 1)
            Recibe : null
            Respuesta : null (http code 204)
        PUT : /api/auto/1 (esto realizará un update del auto 1)
            Recibe : JSON con datos del vehiculo a cambiar (marca,modelo,anio,patente,color,id_propietario) 
                Ejemplo para cambiar color del vehiculo:
                {
                    "color" : "verde"
                }
            Respuesta : JSON con id del vehiculo al cual se le realizó el update.
                {
                    "id_auto": 1
                }
        GET: /api/auto/1
            Recibe : null,
            Respuesta : Vehiculo junto con su propietario, ej:
                {
                    "data": {
                        "id": 1,
                        "marca": "Toyota",
                        "modelo": "hilux",
                        "anio": 2011,
                        "patente": "fte123asd",
                        "color": "Verde",
                        "id_propietario": 1,
                        "createdAt": "2022-02-24T21:16:47.000Z",
                        "updatedAt": null,
                        "deletedAt": null,
                        "propietario": {
                            "id": 1,
                            "apellido": "Alberto",
                            "nombre": "Ramirez",
                            "email": "albertoramirez@gmail.com",
                            "dni": 12345678,
                            "createdAt": "2022-02-24T21:16:47.000Z",
                            "updatedAt": null,
                            "deletedAt": null
                        }
                    }
                }
        GET /api/auto: (Trae todos los vehiculos con su propietario)
            Recibe : null,
            Respuesta : Array con objetos
                {
                    "data": [{
                        "id": 1,
                        ...
                    }, {
                        "id":2,
                        ...
                    }
                    ]
                }

    Propietario 
        POST /api/propietario (Crea un nuevo registro de propietario en la DB)
            Recibe : JSON, ej: 
            {
                "apellido" : "gonzalez",
                "nombre" : "matias",
                "email" : "matias@gmail.com",
                "dni" : 12345678
            }
            Respuesta : JSON con id del propietario creado, ej:
            {
                    "id_propietario": 4
            }
    Servicios
        GET /api/servicios (Lista los servicios existentes)
            Recibe : null
            Respuesta : 
            {
                "data": [
                    {
                        "id": 1,
                        ...
                    },
                    {
                        "id": 2,
                        ...
                    },...
                ]
            }
        POST /api/servicios (Registra un servicio dentro del historial de servicios del vehiculo)
            Recibe : JSON con array de servicios y el id del vehiculo. Ej:
            {
                "id_servicio" : [1,2,5],
                "id_auto" : 2
            }
            Respuesta : Lista de servicios realizados, junto con el monto total, y un id de transaccion.
            {
                "data": {
                    "servicios_realizados": [
                        "Cambio de aceite",
                        "Cambio de filtro",
                        "Pintura"
                    ],
                    "monto_total": 460.2,
                    "id_transaccion": 60831
                }
            }

    Historial servicios:
        GET /api/historial/2 (Lista los servicios que realizó el vehiculo en este caso el vehiculo con id = 2)
            Recibe : null, 
            Respuesta : Listado de servicios realizados. Ej:
            {
                "data": [
                    {
                        ...
                    },
                    {
                        ...
                    }
                ]
            }

