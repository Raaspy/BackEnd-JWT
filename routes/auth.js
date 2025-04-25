/*
    * Rutas de Usuarios / Auth
    * Host + /api/auth
*/

const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = express.Router();

// Llamamos al json desde controllers.
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

//* EndPoint Logeo de Usuarios
router.post(
    '/',
    [ //Middlewares
        check('email', 'El Email es obligatorio.').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres.').isLength({ min: 6}),
        validarCampos
    ],
    loginUsuario);

//* EndPoint Creacion de Usuarios
router.post(
    '/new',
    [ //Middlewares
        check('name', 'El Nombre es obligatorio.').not().isEmpty(),
        check('email', 'El Email es obligatorio.').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres.').isLength({ min: 6}),
        validarCampos
    ],
    crearUsuario);

//* EndPoint Revalidacion de Token
router.get('/renew', revalidarToken);

module.exports = router;