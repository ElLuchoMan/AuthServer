const express = require('express');
//Crear servidor-aplicación de express
const app = express();

app.listen(4000, () => {
    console.log(`Servidor corriendo en ${4000}`);
});