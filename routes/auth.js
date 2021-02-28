const { Router } = require('express');
const { crearUsuario } = require('./controllers/auth');

const router = Router();
//Crear nuevo usuario
router.post('/new', crearUsuario);
//Login usuario
router.post('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
});
//Validar Token
router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Validar token'
    });
});



module.exports = router;