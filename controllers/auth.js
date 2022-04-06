const { response } = require('express');

const crearUsuario =(req, res = response) => {

    const { name, email, password } = req.body;
    console.log(name, email, password);

    return res.json({
        ok: true,
        message: 'User created successfully',
    });
}


const loginUsuario = (req, res) => {

    const { email, password } = req.body;
    console.log(email, password);

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