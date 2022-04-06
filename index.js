// Servidore express y rutas
const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT 
// console.log(process.env);


//Directorio Publico
app.use(express.static('public'))

// Cors para permitir peticiones desde otras paginas
const cors = require('cors')
app.use(cors())

// Body parser para leer los datos body
app.use(express.json())


//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))