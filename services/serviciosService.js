const db = require('../models/index.js');

const serviciosService = {
    traerTodosLosServicios : async () => {
        try{
            const result = await db.servicio.findAll();

            if(result) {
                resultado = {"status":200,"res": {"data" : result}};
            } else {
                resultado = {"status":"400","res":"No se encontraron servicios"};
            }
            return resultado;

        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },

    registarServicio : async (req) => {
        try{

            const servicios = req.id_servicio;
            const id_auto = req.id_auto;
            let monto_total = 0;
            let servicio_realizado = [];
            if(servicios.length > 0) {
                for(value in servicios ) {

                    let servicio = await db.servicio.findOne({
                        where : {id : servicios[value]}
                    });

                    if(servicio) {

                        const servicio_guardado = await db.historial_servicios.create({
                            id_auto : id_auto,
                            id_servicio : servicios[value],
                            monto : servicio.monto
                        });
                        if(servicio_guardado){

                            monto_total += servicio.monto;
                            //guardo el nombre de los servicios realizados
                            servicio_realizado.push(servicio.nombre);
                        } else {
                            return {"status":500,"res": {"data" : 'No se pudo guardar el servicio'}};
                        }
                        
                    } else {
                        return {"status":400,"res": {"data" : 'No se pudo encontrar el servicio'}}
                    }                    
                }
            }
            //TODO: realizar la validacion de que la pintura no la pueden realizar los autos grises.
            
            resultado = {"status":200,"res": {"data" : 
                {
                    'servicios_realizados' : servicio_realizado,
                    'monto_total' : monto_total
                }
            }};

            return resultado;

        }catch(error){
            resultado = {"status":"500","res":error};
            return resultado;
        }
    } 
}

module.exports = serviciosService;