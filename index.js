const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Crear servidor-aplicación de express
const app = express();
//Directorio publico
app.use(express.static('public'));
//Cors
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en ${process.env.PORT}`);
});