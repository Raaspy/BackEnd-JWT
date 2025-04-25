const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarJWT = ( id, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { id, name };
        const secretKey = process.env.SECRET_KEY_JWY;
        const expiredTime = process.env.JWT_EXPIRATION;

        jwt.sign( payload, secretKey, {
            expiresIn: expiredTime
        }, (err, token) => {

            if ( err ) {
                console.log(err);
                reject('Error al generar el token.')
            }

            resolve( token );

        })
    });
}

module.exports = { generarJWT };




