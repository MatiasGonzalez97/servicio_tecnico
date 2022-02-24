const Router = require("express");

const serviciosService = require("../services/serviciosService");

const route = Router();

/* Obtención de servicios*/
route.get('/',async (req, res) => {
    const response = await serviciosService.traerTodosLosServicios();

    return res.status(response.status).json(response.res);
});


route.post('/',async (req, res) => {

    const response = await serviciosService.registarServicio(req.body);

    return res.status(response.status).json(response.res);
});

module.exports = route;