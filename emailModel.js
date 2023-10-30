const mongoose = require("mongoose");


const emailSchema = new mongoose.Schema({

    email:String
  

    
});






let emailModel =  mongoose.model("Email", emailSchema);





module.exports = {
    emailModel
}


