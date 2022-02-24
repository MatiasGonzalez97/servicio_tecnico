const { Router } = require("express");
const autos = require ("./autosRoute.js");
const propietario = require("./propietarioRoute");
const servicios = require("./serviciosRoute");
const historial = require("./historialRoute");

const route = Router();

route.use('/auto',autos);

route.use('/propietario',propietario);

route.use('/servicios',servicios);

route.use('/historial',historial);

module.exports = route;
