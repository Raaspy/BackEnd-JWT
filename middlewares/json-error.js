const jsonErrorHandler = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('❌ JSON mal formado:', err.message);
        return res.status(400).json({
            ok: false,
            msg: 'El formato del cuerpo de la petición es inválido.'
        });
    }
    next();
};

module.exports = { jsonErrorHandler };