const db = require('../models/index.js');
const validador_auto = require('../helper/color_auto_validator');

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

            let servicios = req.id_servicio;
            const id_auto = req.id_auto;
            let monto_total = 0;
            let servicio_realizado = [];

            /* Crear id_transaccion*/
            do {
                var id_transaccion = Math.floor(Math.random() * 99999) + 1 ;
                var servicio_encontrado = await db.historial_servicios.findOne({
                    where : {id_transaccion : id_transaccion}
                });
            } while(servicio_encontrado != null)
            /*------------------------*/

            servicios = await validador_auto.autoGris(servicios,id_auto);

            if(servicios.length > 0) {
                for(value in servicios ) {

                    let servicio = await db.servicio.findOne({
                        where : {id : servicios[value]}
                    });

                    if(servicio) {

                        var servicio_guardado = await db.historial_servicios.create({
                            id_auto : id_auto,
                            id_servicio : servicios[value],
                            monto : servicio.monto,
                            id_transaccion : id_transaccion
                        });
                        if(servicio_guardado){

                            monto_total += servicio.monto;

                            servicio_realizado.push(servicio.nombre);
                        } else {
                            return {"status":500,"res": {"data" : 'No se pudo guardar el servicio'}};
                        }           
                    } else {
                        return {"status":400,"res": {"data" : 'No se pudo encontrar el servicio'}}
                    }                    
                }
            }

            
            resultado = {"status":200,"res": {"data" : 
                {
                    'servicios_realizados' : servicio_realizado,
                    'monto_total' : monto_total,
                    'id_transaccion' : id_transaccion
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