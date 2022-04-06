
const express = require('express')
const app = express()
const port = 4000

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))