"use strict"


//Shared configuation for Passport API

let dotenv = require("dotenv");
require("colors");

//Extract env items
dotenv.config({path: __dirname + '/.env'});

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = process.env.PORT || 3001

//Use dev db, testing db, or via env variable, production db

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")

    ? "ADAPassport_Test"
    : process.env.DATABASE_URL || "ADAPassport";
    
}


const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;






console.log("ADA Passport Config:" .green);
console.log("SECRET_KEY:" .yellow, SECRET_KEY);
console.log("PORT:" .yellow, PORT.toString());
//console.log("BCRYPT_WORK_FACTOR:" .yellow, BCRYPT_WORK_FACTOR);
console.log("Database:" .yellow, getDatabaseUri());
console.log("---")




module.exports = {
    SECRET_KEY, PORT, BCRYPT_WORK_FACTOR, getDatabaseUri
};