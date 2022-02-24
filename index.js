const express = require('express');
const { json } = require('express');
const config = require('./config/envConfig');
const routesApi = require('./routes/routes');

const app = express();

app.listen(config.PORT || 3000,()=>{
    console.log(`Se está escuchando en el puerto ${config.PORT}`);
});

app.use(json());
app.use('/api',routesApi);

module.exports = app;
