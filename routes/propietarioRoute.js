const Router = require("express");

const propietarioService = require("../services/propietarioService");

const route = Router();

/* Creacion de propietario*/
route.post('/',async (req, res) => {
    const response = await propietarioService.crearPropietario(req.body);

    return res.status(response.status).json(response.res);
});


module.exports = route;



