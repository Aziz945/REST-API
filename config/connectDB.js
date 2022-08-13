const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"})





const connectDB = async ()=> {
    try {
         await mongoose.connect(process.env.mongoURI)
        console.log(" Connected....")
    } catch (error) {
        console.log(`Not Connected ..... ${error}`)
    }
}

module.exports = connectDB;