## Este es un breve listado de los temas fundamentales de este Proejecto:

    Fundamentos de Node

    REST Services

    JWT

    MongoDB - Mongo Atlas

    Express framework

    Express validator

    CRUD

    Validaciones

    Modelos de base de datos

    Encriptar contraseñas

### Instalar nodemon :
Recargar cuando se hacen cambio y se cuarda

npm install -g nodemon

### Configurar package.json con nodemon

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },


### Paquetes necesarios para la aplicación
npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose

bycryptjs:

cors: Acepte peticiones desde diferente domininios

dotenv: Configurar variables de ambiente

express-validator: Validaciones de los campos 

jsonwebtoken: Generar tokens rapidamente 

mogoose: URM Interactuar con mongo de forma sencilla
