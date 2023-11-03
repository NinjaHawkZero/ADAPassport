require('dotenv').config()

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const {PORT} = require("./config");

let { passportModel } = require("./learnerModel");

let { passportRouter } = require("./passportRoute")
let { emailModel } = require("./emailModel")




mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection




db.on('error', (error) => console.error(error))

db.once('open', () => console.log("Connected To Database"))




app.use(express.json())
app.use('/pass', passportRouter)













app.listen(PORT, process.env.IP, function() {
    console.log("The Passport server has started!")
})





