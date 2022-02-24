const Router = require("express");

const autoService = require("../services/autoService");

const route = Router();

/* Creacion de autos*/
route.post('/',async (req, res) => {
    const response = await autoService.registrarAuto(req.body);

    return res.status(response.status).json(response.res);
});

route.delete('/:id', async (req,res) => {

    const response = await autoService.eliminarAuto(req);

    return res.status(response.status).json(response.res);
});

route.put('/:id', async (req,res) => {
    
    const response = await autoService.actualizarAuto(req);

    return res.status(response.status).json(response.res);
});

route.get('/:id', async (req,res) => {
    
    const response = await autoService.traerAutoPorId(req);

    return res.status(response.status).json(response.res);
});

route.get('/', async (req,res) => {
    
    const response = await autoService.traerTodosLosAutos();

    return res.status(response.status).json(response.res);
});

module.exports = route;



