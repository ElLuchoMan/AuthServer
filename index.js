const express = require('express');
//Crear servidor-aplicación de express
const app = express();

//GET
app.get('/', ()=>{
console.log('Holi jeje');
});

app.listen(4000, () => {
    console.log(`Servidor corriendo en ${4000}`);
});