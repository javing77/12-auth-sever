const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { db } = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt')


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;
    // console.log(name, email, password);

    try {
    // Verificar que no exista correo

    const usuario = await Usuario.findOne({ email });

    if(usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'El usario ya existe con ese email'
        });
    }

    //Crear usuario con el modelo
    const dbUser = new Usuario(req.body);

    // Hash de la contraseña
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync( password, salt )

    // Crear usuario en la base de datos
    await dbUser.save();

    // Generar JWT 
    const token = await generarJWT(dbUser.id, name)

    // Generar Respuesta
    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name,
        email,
        token
    
    });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            message: 'Por favor validar con el administrador',
        });
    
    }

}


const loginUsuario = async (req, res) => {

    console.log('Entra login');

    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });

        //  Validar si el usuario existe
        if( !dbUser ){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }

        //  Confirmar que el password haga match
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'El password no es valida'
            })
        }

        // Generar JWT 
        const token = await generarJWT(dbUser.id, dbUser.name)

        // Respuesta del servicio
        return res.json({ 
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
         })


        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contacte al administrador'
        })
    }
}


// Validar el token
const revalidarToken = async (req, res) => {

    console.log('Entra revalidar');

    const { uid } = req;

    const dbUser = await Usuario.findById(uid)



    const token = await generarJWT(uid, dbUser.name )

    return res.json({
        ok: true,
        uid,
        name: dbUser.name, 
        email : dbUser.email,
        token,
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}