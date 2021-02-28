const express = require('express');
//Crear servidor-aplicación de express
const app = express();

//Rutas
app.use('/api/auth', require('./routes/auth'));


app.listen(4000, () => {
    console.log(`Servidor corriendo en ${4000}`);
});