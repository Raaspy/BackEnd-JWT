const jwt = require('jsonwebtoken');
require('dotenv').config();

function validarToken (req, res, next) {

    const token = req;
    const secretKey = process.env.SECRET_KEY_JWY;

    try {
        // Verificar el token
        const payload = jwt.verify(token, secretKey);

        return {
            id: payload.id,
            email: payload.name
        }

    } catch (error) {
        console.log('❌ Token inválido:', error.message);
        return false;
}

}

module.exports = { validarToken } ;