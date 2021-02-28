const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('./controllers/auth');
const router = Router();
//Crear nuevo usuario
router.post('/new', crearUsuario);
//Login usuario
router.post('/', [
    check('email','El email es obligatorio').isEmail(),
] ,loginUsuario);
//Validar Token
router.get('/renew',revalidarToken);
module.exports = router;