const db = require('../models/index.js');

const historialService = {
    traerServicioPorAuto : async (req) => {
        try{
            const id_auto = req.params.id;
            const result = await db.historial_servicios.findAll({
                where : {
                    id_auto : id_auto
                },
                include : [{
                    model : db.Auto,
                    attributes :{exclude : ['createdAt', 'updatedAt','deletedAt']}
                }, {
                    model : db.servicio,
                    attributes :{exclude : ['createdAt', 'updatedAt','deletedAt']}
                }
            ], 
            });

            if(result) {
                resultado = {"status":200,"res": {"data" : result}};
            } else {
                resultado = {"status":"400","res":"No se encontraron servicios para ese auto"};
            }

            return resultado;

        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },
}

module.exports = historialService;