const mongoose = require("mongoose");


const passportSchema = new mongoose.Schema({

    email:String,
    name:String,
    mentorID:{type: mongoose.Schema.Types.ObjectId, ref:'Mentor'},
    userID: String,
    deviceToken: String,
    badges:[{achievement: String, description: String, didComplete: Boolean, learnerName: String, date: String, isLocked: Boolean}],
    Professional_Toolkit:{Updated_Resume:Boolean, Gave_Resume_Feedback:Boolean, Write_Or_Update_Cover_Letter:Boolean, Create_Business_Card:Boolean, Took_Professional_Headshot: Boolean, Create_Or_Update_LinkedIn:Boolean},
    Portfolio:{Built_Or_Updated_Portfolio: Boolean, Added_Challenges_To_Portfolio: Boolean },
    Networking:{Create_Or_Perfect_Personal_Pitch:Boolean, Coffee_With_A_Peer: Boolean, Made_Five_New_Connections_In_My_Industry:Boolean, Reach_Out_To_Professional_Mentor:Boolean, Attend_Networking_Event:Boolean},
    Career_Readiness:{Attend_A_Professional_Or_Tech_Conference:Boolean, Applied_For_A_Job:Boolean},
    Personal_Glow_Up:{Create_Or_Update_Vision_Board:Boolean, Schedule_Or_Plan_For_Personal_Development:Boolean, Practice_Self_Care:Boolean},
    Design_Skills:{Completed_Design_Luna:Boolean, Enrolled_In_Online_Course:Boolean, Finished_Project_In_Sketch:Boolean, Created_Design_Case_Study:Boolean, Conducted_User_Testing:Boolean, Learned_3_New_Components_On_HIG:Boolean, Watch_Video_On_Developer_Apple_Website:Boolean},
    Coding_Skills:{Completed_100_Days_Of_Swift:Boolean, Completed_Code_Wars_Kata:Boolean, Learned_3_New_Components_On_HIG:Boolean, Watch_Video_On_Developer_Apple_Website:Boolean, Worked_In_Xcode:Boolean, Enrolled_In_Online_Course:Boolean },
    Brain_Rules:{Watch_All_Videos:Boolean}
    

    
});






let passportModel =  mongoose.model("Passport", passportSchema);





module.exports = {
    passportModel
}