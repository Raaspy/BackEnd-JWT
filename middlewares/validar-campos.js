const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    //Manejo de errores
    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        //Estatus 400, problema al crear el usuario.
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}