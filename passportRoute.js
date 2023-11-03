let express = require("express");
let { passportModel } = require("./learnerModel");
let { mentorModel } = require("./mentorModel") 


let passportRouter = new express.Router();


function getFormattedDate() {
    const date = new Date(); // gets the current date
    let day = date.getDate(); // gets the day part
    let month = date.getMonth() + 1; // gets the month part
    const year = date.getFullYear(); // gets the year part

    // pads day and month with 0 if less than 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return month + '/' + day + '/' + year; 
}


//NOTE: Assign userID when mentor and learner accounts are made


passportRouter.delete("/delete/:email", async (req, res) => {
    try {

        let email = req.params.email
        let deletedLearner = await passportModel.findOneAndDelete({email: email})

        res.status(201).json({deletedLearner})
    }

    catch (error) {

        res.status(400).json({message: error.message})
    }
})





//Mentor SignInWithApple
passportRouter.post("/signInWithApple/mentor", async (req, res) => {

    try {
    
        let userID = req.body.user
    
        if(userID.length === 0  || userID === undefined || userID === "") {
            throw new Error('UserID empty')
        }
    
        else {
        let foundUser = await mentorModel.find({userID: userID})
        let mentor = foundUser[0]
    
        res.status(201).json({mentor: mentor})
        }
    
    }
    
    catch(error) {
        res.status(400).json({message: error.message})
    }
    
    
    })


//Create Mentor Account

passportRouter.post("/createMentorPassport", async (req, res) => {


try {

    let email = req.body.email
    let name = req.body.name
    let userID = req.body.user

    //Try find user in DB
    let foundLearner = await mentorModel.find({userID: userID});

    //If user found return user
    if(foundLearner.length > 0) {
        let mentor = foundLearner[0];

        
        res.status(201).json({mentor: mentor});
    }
     else {
        let mentor = await mentorModel.create({email:email, name: name, userID: userID})

        res.status(201).json({mentor: mentor})
     }


}

catch(error) 

{res.status(400).json({message: error.message})}





})


//Learner SignInWithApple
passportRouter.post("/signInWithApple", async (req, res) => {

    try {
    
        let userID = req.body.user
    
        if(userID.length === 0  || userID === undefined || userID === "") {
            throw new Error('UserID empty')
        }

        else {
        let foundUser = await passportModel.find({userID: userID})
        let learner = foundUser[0]
    
        res.status(201).json({learner: learner})
    }
    
    }
    
    catch(error) {
        res.status(400).json({message: error.message})
    }
    
    
    })

//Must verify learner exists
passportRouter.post("/createPassport", async (req, res) => {


    try
    
    {
        //Extract Data
        let learnerEmail = req.body.email;
        let learnerName = req.body.name;
        let userID = req.body.user
        
        
       


        //Try find user in DB
        let foundLearner = await passportModel.find({userID: userID});
      
        

        //If user found return user
        if(foundLearner.length > 0) {
            let learner = foundLearner[0];

            
            res.status(201).json({learner: learner});
        }


                else {

                    
        let badgeObject1 = {
            achievement:"Design Skills",
            description:"Elevate your skills in UX design! From Sketch projects to HIG components and successful handoffs, the journey is thrilling. Dive in now!",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked:true
        };



        let badgeObject2 = {
            achievement:"Coding Skills",
            description:"Learning more about coding is beneficial for everyone. Complete these tasks to earn the coding skills badge.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };





        let badgeObject3 = {
            achievement:"Professional Toolkit",
            description:"Brushing up your resume or creating your LinkedIn profile?  Complete these tasks to have a fully equipped toolkit.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };


        let badgeObject4 = {
            achievement:"Portfolio",
            description:"Unlock your potential! Build & update your portfolio to showcase your growth and document challenges conquered.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };


        let badgeObject5 = {
            achievement:"Networking",
            description:"Networking can feel icky sometimes, but it doesn't have to. Complete these tasks to help cultivate meaningful relationships.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };



        let badgeObject6 = {
            achievement:"Career Readiness",
            description:"Empower your future by attending tech/professional conferences and applying for jobs. Career readiness is your ticket to success.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };



        let badgeObject7 = {
            achievement:"Personal Glow Up",
            description:"Boost your learning journey with self-care! Update your vision board, plan personal development time, and prioritize self-care.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };


        let badgeObject8 = {
            achievement:"Brain Rules",
            description:"Did you enjoy the lectures on our minds and how they work from Dr.  Medina. Take a deeper dive with his lectures on Dropbox.",
            didComplete: false,
            learnerName:"",
            date:"",
            isLocked: true
        };

        let choices = [badgeObject1, badgeObject2, badgeObject3, badgeObject4, badgeObject5, badgeObject6, badgeObject7, badgeObject8];
        const badgesArr = [];

        for(let i = 0; i <= choices.length - 1; i++ ) {

         
           badgesArr.push(choices[i]);
        }
        
        let learner = await passportModel.create({email:learnerEmail, name: learnerName, userID: userID, badges: badgesArr,  Professional_Toolkit:{Updated_Resume:false, Gave_Resume_Feedback:false, Write_Or_Update_Cover_Letter:false, Create_Business_Card:false, Took_Professional_Headshot: false, Create_Or_Update_LinkedIn:false},
            Portfolio:{Built_Or_Updated_Portfolio: false, Added_Challenges_To_Portfolio: false },
            Networking:{Create_Or_Perfect_Personal_Pitch:false, Coffee_With_A_Peer: false, Made_Five_New_Connections_In_My_Industry:false, Reach_Out_To_Professional_Mentor:false, Attend_Networking_Event:false},
            Career_Readiness:{Attend_A_Professional_Or_Tech_Conference:false, Applied_For_A_Job:false},
            Personal_Glow_Up:{Create_Or_Update_Vision_Board:false, Schedule_Or_Plan_For_Personal_Development:false, Practice_Self_Care:false},
            Design_Skills:{Completed_Design_Luna:false, Enrolled_In_Online_Course:false, Finished_Project_In_Sketch: false, Created_Design_Case_Study: false, Conducted_User_Testing:false, Learned_3_New_Components_On_HIG: false, Watch_Video_On_Developer_Apple_Website:false},
            Coding_Skills:{Completed_100_Days_Of_Swift:false, Completed_Code_Wars_Kata: false, Learned_3_New_Components_On_HIG: false, Watch_Video_On_Developer_Apple_Website: false, Worked_In_Xcode: false, Enrolled_In_Online_Course: false },
            Brain_Rules:{Watch_All_Videos:false}})

            console.log(`creating learner ${learner}`)
            res.status(201).json({learner: learner})
            
        }

      

    }


    catch(error){
        res.status(400).json({message:error.message})
    }





});





//Get all learners
passportRouter.get("/getAllLearners", async (req, res) => {
    try {
        let learners = await passportModel.find()

       

        res.status(201).json({learners:learners})
    }

    catch(error) {
        res.status(400).json({message: error.message})
    }
}) 


//Get a single learner
passportRouter.get("/getLearner/:email", async (req, res) => {
    

    try
    {

        let email = req.params.email;
        let userArr = await passportModel.find({email: email});

        let learner = userArr[0]

        console.log(learner)
        
        res.status(201).json({learner: learner})

    }

    catch(error) {
        res.status(400).json({message:error.message})
    }
})




//Update progress of learner
passportRouter.post("/updateProgress/:email", async (req, res) => {

    try {
        let response = req.body;
        let userReturned = await passportModel.find({email: response.email});

        let userEdited = userReturned[0];
        userEdited.Professional_Toolkit = response.Professional_Toolkit
        userEdited.Portfolio = response.Portfolio
        userEdited.Networking = response.Networking
        userEdited.Career_Readiness = response.Career_Readiness
        userEdited.Personal_Glow_Up = response.Personal_Glow_Up
        userEdited.Design_Skills = response.Design_Skills
        userEdited.Coding_Skills = response.Coding_Skills
        userEdited.Brain_Rules = response.Brain_Rules

       let learner = await userEdited.save()

       console.log(learner)

       res.status(200).json({learner:learner})

    }


    catch(error) {
        res.status(400).json({message: error.message})
    }
})


//Unlock Badges for Student
passportRouter.post("/unlockBadge", async (req, res) => {
    
    try 
    {
        console.log("Not working")
        let email = req.body.learnerEmail;
        let achievement = req.body.achievement;

        let returnUser = await passportModel.find({email: email});

        let user = returnUser[0];



       user.badges.forEach(function(badge) { 
        if(
            badge.achievement == achievement
       )
       { badge.didComplete = true;
         badge.date = getFormattedDate()}
    });

    await user.save();

    console.log(`this is the user ${user}`)

        res.status(201).json({message:"Achievement Unlocked!"});

    }

    catch(error) 

    {res.status(400).json({message:error.message})}
})


module.exports = {
    passportRouter
}