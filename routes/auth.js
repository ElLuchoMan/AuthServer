const { Router } = require('express');

const router = Router();
//Crear nuevo usuario
router.post('/new', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
});
//Login usuario
router.post('/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
});
//Validar Token
router.get('/review', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Validar token'
    });
});



module.exports = router;