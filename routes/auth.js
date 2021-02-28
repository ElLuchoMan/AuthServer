const { Router } = require('express');
const { crearUsuario, loginUsuario } = require('./controllers/auth');

const router = Router();
//Crear nuevo usuario
router.post('/new', crearUsuario);
//Login usuario
router.post('/', loginUsuario);
//Validar Token
router.get('/renew', revalidarToken);



module.exports = router;