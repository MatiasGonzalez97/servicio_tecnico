const db = require('../models/index.js');
const validador = require('../helper/validator');

const autoService = {
    registrarAuto : async (req) => {
        try{ 
            const {marca,anio,patente,color,modelo,id_propietario} = req;
            
            const { value, error } = validador.validar_auto({marca,modelo,anio,patente,color,id_propietario});

            const validar_propietario = await validador.validar_existencia_propietario(id_propietario);

            if(!validar_propietario){
                return {"status":"400","res":{"error" : "Ese propietario no se encuentra registrado"}};
            }

            if(error) {
                return {"status":"400","res":{"error" : error.details[0].message}};
            }
            
            const result = await db.Auto.create({
                marca : marca,
                anio : anio,
                patente : patente,
                color : color,
                modelo : modelo,
                id_propietario : id_propietario,
                createdAt: Date.now(),
                deletedAt: null,
            });

            if(result) {
                resultado =  {"status":200,"res": {"id_auto" : result.id}}
            } else {
                resultado = {"status": 422, "res" : "No se pudo guardar el auto"}
            }

            return resultado;
        }catch(error){
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },

    eliminarAuto :async (req) => {
        try{
            const id_auto = req.params.id;

            const auto = await db.Auto.findOne({
                where : {
                    id : id_auto,
                    deletedAt : null
                }
            });

            if(auto){
                const result = await auto.update({deletedAt : new Date()},
                {
                    where :{
                        id :id_auto
                    }
                });
                
                if(result) {
                    resultado =  {"status":204,"res": ""};
                } else {
                    resultado = {"status": 422, "res" : "No se pudo eliminar el registro"}
                }
                
            } else {
                resultado = {"status":"400","res":"No se encontró un auto con ese id"};
            }

            return resultado;

        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },
    
    actualizarAuto : async (req) => {
        try{
            const id_auto = req.params.id;
            const {marca,anio,patente,color,modelo,id_propietario} = req.body;
            const fields = {marca,anio,patente,color,modelo,id_propietario};
            const result = await db.Auto.findOne({
                where : {
                    id : id_auto,
                    deletedAt : null
                }
            });

            if(result) {
                await result.update(fields);

                resultado =  {"status":200,"res": {"id_auto" : result.id}}
            } else {
                resultado = {"status":"400","res":"No se encontró un auto con ese id"};
            }

            return resultado;
        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },

    traerAutoPorId : async (req) => {
        try{
            const id_auto = req.params.id;

            const result = await db.Auto.findOne({
                include : [{
                    model : db.propietario
                }], 
                where : {
                    id : id_auto,
                    deletedAt : null
                }
            });

            if(result) {
                resultado = {"status":200,"res": {"data" : result}};
            } else {
                resultado = {"status":"400","res":"No se encontró un auto con ese id"};
            }
            return resultado;
        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    },

    traerTodosLosAutos : async () => {
        try{
            const result = await db.Auto.findAll({
                include : [{
                    model : db.propietario
                }], 
                where : {
                    deletedAt : null
                }
            });

            if(result) {
                resultado = {"status":200,"res": {"data" : result}};
            } else {
                resultado = {"status":"400","res":"No se encontraron vehiculos"};
            }
            return resultado;

        }catch(error) {
            resultado = {"status":"500","res":error};
            return resultado;
        }
    }
}

module.exports = autoService;