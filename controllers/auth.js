const { response } = require('express');

const crearUsuario =(req, res = response) => {

    return res.json({
        ok: true,
        message: 'User created successfully',
    });
}


const loginUsuario = (req, res) => {
    return res.json({
        ok: true,
        message: 'user login',
    });
}

const revalidarToken = (req, res) => {
    return res.json({
        ok: true,
        message: 'renew token', 
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}