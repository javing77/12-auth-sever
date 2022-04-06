const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

router.post('/new-user', crearUsuario);


router.post('/', loginUsuario );

router.get('/renew', revalidarToken );




module.exports = router;
