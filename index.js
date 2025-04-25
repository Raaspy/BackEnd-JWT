//Configuracion inicial de express.
const express = require('express');
const { jsonErrorHandler } = require('./middlewares/json-error');
require('dotenv').config();

//* Crear el servidor de express.
const app = express();

//Ruta hacia directorio publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );
app.use( jsonErrorHandler );

//Creacion de rutas.
app.use( '/api/auth', require('./routes/auth') );

//Escuchar peticiones.
app.listen( process.env.PORT, async() => {
    console.log(`🟢 Escuchadando en el puerto: ${process.env.PORT}`);
});