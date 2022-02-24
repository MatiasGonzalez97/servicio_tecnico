const { Router } = require("express");
const autos = require ("./autosRoute.js");
const propietario = require("./propietarioRoute");
const servicios = require("./serviciosRoute");

const route = Router();

route.use('/auto',autos);

route.use('/propietario',propietario);

route.use('/servicios',servicios);

module.exports = route;
