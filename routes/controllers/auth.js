const { response } = require('express');
const crearUsuario = (req, res) => {
    const { email, name, password } = req.body;
    console.log(email, name, password);

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
}
const loginUsuario = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
}
const revalidarToken = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Validar token'
    });
}
module.exports = { crearUsuario, loginUsuario, revalidarToken }