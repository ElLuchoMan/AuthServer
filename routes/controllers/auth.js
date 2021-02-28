const { response } = require('express');
const Usuario = require('../../models/Usuario');
const crearUsuario = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        //verificar si no existe un correo igual
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Email ya registrado'
            })
        }
        //Crear usuario con el modelo 
        usuario = new Usuario(req.body);
        //Encriptar la contraseña con Hash

        //Generar JWT

        //Crear usuario de DB
   
        //Generar respuesta


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        });
    }
}
const loginUsuario = (req, res) => {
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