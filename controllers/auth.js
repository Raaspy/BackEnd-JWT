const { response } = require('express');
const bcrypt = require('bcryptjs'); //Dependencia para encriptar contrasenias.
const { generarJWT } = require('../helpers/jwt');
const { validarToken } = require('../helpers/validar-token');
const {usuarioExiste, ingresarUsuario, obtenerContrasenia} = require('../models/usuarios');
const { body } = require('express-validator');

//* EndPoint Creacion de Usuarios
const crearUsuario = async (req, res = response) => {
    const  { name, email, password } = req.body;

    try {
        //* Aviso en caso de que el usuario ya exista.
        const usuario = await usuarioExiste(email);

        if ( usuario && Object.keys(usuario).length > 0 ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe.'
            })
        } else {
            //* Encriptacion de contrasenia.
            const salt = bcrypt.genSaltSync();
            const passwordHash = bcrypt.hashSync(password, salt);

            //* Se crea el nuevo usuario.
            const nuevoUsuario = await ingresarUsuario(name, email, passwordHash);
            const tokenInicial = await generarJWT(nuevoUsuario.id, nuevoUsuario.name)
            res.status(201).json({
                ok: true,
                msg: 'El usuario fue creado con exito.',
                user: nuevoUsuario.name,
                token: tokenInicial
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error en el servidor.',
            error: error
        })
    }
}

//* EndPoint Logeo de Usuarios
const loginUsuario = async (req, res = response) => {
    const  { email, password } = req.body;

    try {
        const getData = await usuarioExiste(email);

        if (!getData) {
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no validas.'
            })
        } else {
            const checkPass = bcrypt.compareSync(password, getData.password);
            const token = await generarJWT(getData.id, getData.name)

            if (checkPass) {
                return res.status(201).json({
                    ok: true,
                    msg: 'Usuario logeado',
                    token: token
                })
            }
            else {
                return res.status(400).json({
                    ok: false,
                    msg: 'Credenciales no validas.'
                })
            }
        }

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error en el servidor.',
            error: error
        })
    }
}

//* EndPoint Revalidacion de Token
const revalidarToken = async (req, res = response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    const dataToken = validarToken(token);

    if (!dataToken) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    } else {
        
        try {
            const newToken = await generarJWT(dataToken.id, dataToken.name)

            return res.status(201).json({
                ok: true,
                msg: 'Usuario renovado',
                token: newToken
            })
        } catch (error) {

            console.log('❌ Error al renovar el token: ', error.message);

            return res.status(500).json({
                ok: false,
                msg: 'No se pudo renovar el token'
            });
        }

    }

}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}