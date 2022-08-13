const express = require('express');

const connectDB = require('./config/connectDB')

require("dotenv").config({path:"./config/.env"});


const app = express();




connectDB();

app.use(express.json())
app.use("/api/user",require("./routes/userRoutes"))

const PORT = process.env.PORT || 6000 ;

app.listen(PORT, (err)=>
err? console.log(err) : console.log(` Running on port ${PORT}`)
)
