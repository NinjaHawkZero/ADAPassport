const mongoose = require("mongoose");


const mentorSchema = new mongoose.Schema({

    email:String,
    name:String,
    userID:String
    
   
    

    
});






let mentorModel =  mongoose.model("Mentor", mentorSchema);





module.exports = {
    mentorModel
}