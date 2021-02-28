const { Router } = require('express');

const router = Router();
//Crear nuevo usuario
router.post('/new', (req, resp) => {
    return response.json({
        ok: true,
        msg: 'Crear usuario /new'
    });
});
//Login usuario
router.post('/', (req, resp) => {
    return response.json({
        ok: true,
        msg: 'Login usuario /'
    });
});

router.get('/review', (req, resp) => {
    return response.json({
        ok: true,
        msg: 'Validar token'
    });
});



module.exports = router;