const Router = require("express");

const historialService = require("../services/historial_serviciosService");

const route = Router();

/* Obtención de servicios*/
route.get('/:id',async (req, res) => {

    const response = await historialService.traerServicioPorAuto(req);

    return res.status(response.status).json(response.res);
});

module.exports = route;