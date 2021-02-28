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
const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {
        //verificacion
        const dbUser = await Usuario.findOne({ email });
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Correo inválido'
            });
        }
        //Confirmar contraseña 
        const validPassword = bcrypt.compareSync(password, dbUser.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña inválida'
            });
        }
        //generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);
        //respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        });
    }
}
const revalidarToken = async (req, res = response) => {
    const { uid, name } = req;
    //Generar JWT
    const token = await generarJWT(uid, name);
    return res.json({
        ok: true,
        uid,
        token
    });
}
module.exports = { crearUsuario, loginUsuario, revalidarToken }