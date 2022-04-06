const {  mongoose } = require("mongoose");
require('dotenv').config()

const dbConnection = async () => {
    try {
        
        await mongoose.connect(process.env.BD_CDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connected");

    } catch (error) {
        console.log(error);
        // throw error;
    }
    }


    module.exports = {dbConnection};