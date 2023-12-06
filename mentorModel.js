const mongoose = require("mongoose");


const mentorSchema = new mongoose.Schema({

    email:String,
    name:String,
    userID:String,
    deviceToken: String
   

});






const mentorModel =  mongoose.model("Mentor", mentorSchema);

//************************************************************************************************ */

const mentorMenteeSchema = new mongoose.Schema({

    mentorID:{type: mongoose.Schema.Types.ObjectId, ref:'Mentor'},
    menteeID:{type: mongoose.Schema.Types.ObjectId, ref:'Passport'}

});


const mentorMenteeModel = mongoose.model("MentorMentee", mentorMenteeSchema)





module.exports = {
    mentorModel, mentorMenteeModel
}