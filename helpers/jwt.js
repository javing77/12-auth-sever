const jwt = require('jsonwebtoken');
require('dotenv').config();
 
 const generarJWT = (uid, name ) => {

    const payload = {uid, name };

    //Crear una promesa manual
    return new Promise ( (resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '6h'
        }, (err, token) => {
    
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve( token )
            }
    
        })
    } )
 }

 generarJWT()

 module.exports = {
     generarJWT
 }