const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log(process.env);
//Crear servidor-aplicación de express
const app = express();
//Cors
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en ${process.env.PORT}`);
});