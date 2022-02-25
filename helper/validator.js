const Joi = require('joi');
const db = require('../models/index.js');

const validar_auto = ({ marca, modelo, anio, patente, color , id_propietario}) => {

    const schema = Joi.object({
        marca: Joi.string()
            .min(1)
            .required(),

        modelo: Joi.string()
            .min(1)
            .required(),

        anio: Joi.number()
            .integer()
            .required(),

        patente: Joi.string()
            .min(1)
            .max(12)
            .required(),
        color: Joi.string()
            .min(1)
            .max(25)
            .required(),
        id_propietario : Joi.number()
            .min(1)
            .required()
    }

    );
    return schema.validate({ marca: marca, modelo: modelo, anio: anio, patente: patente, color: color , id_propietario : id_propietario });
}

const validar_propietario = ({ apellido, nombre, email, dni }) => {
    const schema = Joi.object({
        apellido: Joi.string()
            .min(1)
            .max(32)
            .required(),

        nombre: Joi.string()
            .min(1)
            .max(32)
            .required(),

        email: Joi.string()
            .email({ tlds: {allow: false} })
            .min(1)
            .max(128)
            .required(),
        dni: Joi.number()
            .required()
    }

    );
    return schema.validate({ apellido: apellido, nombre: nombre, email: email, dni: dni });
}

const validar_existencia_propietario = async (id) => {
    const propetario_existe = await db.propietario.findOne({
        where : {
            id : id
        }
    });

    return propetario_existe ? true : false; 
}

module.exports = {validar_auto, validar_propietario, validar_existencia_propietario};