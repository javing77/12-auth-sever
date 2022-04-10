// Servidore express y rutas
const express = require('express')
const app = express()

const path = require('path');

require('dotenv').config()
const port = process.env.PORT 
// console.log(process.env);


//Conexion a la base de datos
const { dbConnection } = require('./db/config')
dbConnection()

//Directorio Publico
app.use(express.static('public'))

// Cors para permitir peticiones desde otras paginas
const cors = require('cors')
app.use(cors())

// Body parser para leer los datos body
app.use(express.json())


//Rutas
app.use('/api/auth', require('./routes/auth'));

// HACER QUE ANGULAR DESPUES DE HACER EL DEPLOY SIGA TENEINDO EL CONTRO DE LAS RUTAS
app.get( '*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html') )
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))