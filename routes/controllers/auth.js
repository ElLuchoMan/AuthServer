const { response } = require('express');
const crearUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
}

const loginUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
}
module.exports = { crearUsuario, loginUsuario }