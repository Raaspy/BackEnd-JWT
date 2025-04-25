const pool = require('../db/config');

//* Comprueba si existe un usuario con el email enviado.
const usuarioExiste = async (email) => {
    const respuesta = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return respuesta.rows[0] || false;
};


//* Crea el usuario en la base de datos.
const ingresarUsuario = async (name, email, passwordHash) => {
    const respuesta = await pool.query('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, passwordHash]);
    return respuesta.rows[0];
};


//* Obtencion de la password para comprobar al usuario.
const obtenerContrasenia = async (email) => {
    const respuesta = await pool.query('SELECT password FROM usuarios WHERE email = $1', [email]);
    return respuesta.rows[0];
}


module.exports = {
    usuarioExiste,
    ingresarUsuario,
    obtenerContrasenia
}