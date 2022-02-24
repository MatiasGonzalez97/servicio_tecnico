const db = require('../models/index.js');

const propietarioService = {
    crearPropietario : async (req) => {
        try{
            const {apellido,nombre,email,dni} = req;

            const result = await db.propietario.create({
                apellido : apellido,
                nombre : nombre,
                email : email,
                dni : dni,
                createdAt: Date.now(),
                deletedAt: null,
            });
            if(result) {
                resultado =  {"status":200,"res": {"id_propietario" : result.id}}
            } else {
                resultado = {"status": 422, "res" : "No se pudo guardar el propietario"}
            }

            return resultado;
        }catch(err){
            resultado = {"status":"500","res":error};
            return resultado;
        }
    }
}

module.exports = propietarioService;