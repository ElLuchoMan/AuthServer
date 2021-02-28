const { response } = require('express');
const Usuario = require('../../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../../helpers/jwt');
const crearUsuario = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        //verificar si no existe un correo igual
        const usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Email ya registrado'
            })
        }
        //Crear usuario con el modelo 
        const dbUser = new Usuario(req.body);
        //Encriptar la contraseña con Hash
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt);
        //Generar JWT
        const token = await generarJWT(dbUser.id, name);
        //Crear usuario de DB
        await dbUser.save();
        //Generar respuesta
        return res.status(200).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });

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