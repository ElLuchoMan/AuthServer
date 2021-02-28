const express = require('express');
//Crear servidor-aplicación de express
const app = express();

//GET
app.get('/', (req, resp) => {
    resp.status(500).json(
        {
            ok: true,
            msg: 'Holi vida♥',
            uid: 3
        });

});

app.listen(4000, () => {
    console.log(`Servidor corriendo en ${4000}`);
});