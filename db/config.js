const Mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        await Mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }
}

module.exports={dbConnection}