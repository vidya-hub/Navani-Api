const express = require("express");
const mongoose=require("mongoose");
userdata=require("../models/models");
// router.use(express.json());

// mongo "mongodb+srv://vidyasagar:sagar@navaani.7bqy7.mongodb.net/sagar?retryWrites=true&w=majority"
// command for mongodb

const router = express.Router();
router.use(express.json());


//http://localhost:3000/users/register/
router.post("/register",async(req,res)=>{
    const sendData=new userdata({
        username:req.body.username,
        password:req.body.password,
    })
    try {
        const datasaved=await sendData.save();
        res.json(datasaved);
        console.log("registered");
    } catch (error) {
        {
            res.send(
                {message:error,}
            )
        }
    }
    console.log("registered");
});


//db.checkFieldExistsOrNotDemo.find({ 'field' : { '$exists' : true }}).pretty();
// this query checks the field exits or not

// passing multiple params in get request the url is 

// usr login params find({username:"vidya123",password:"123sagar"})



//http://localhost:3000/users/login/vidya123/pass/vidya
router.get("/login/:username/pass/:password",async(req,res)=>{
    console.log(req.params.password);
    console.log(req.params.username);
    try {
        const userlogin = await userdata.find({
            username:req.params.username,
            password:req.params.password
        });
        
        res.json(userlogin);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});
//get user by id
router.get("/getuserbyid/:id",async(req,res)=>{
    console.log(req.params.id);
    // console.log(req.params.username);
    try {
        const userlogin = await userdata.find({
            _id:req.params.id,
            // password:req.params.password
        });
        
        res.json(userlogin);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});





//get all users     

//http://localhost:3000/users/allusers

router.get("/allusers",async(req,res)=>{
    try {
        const users = await userdata.find();
        
        res.json(users);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});




//http://localhost:3000/users/forgot/vidya123
router.patch("/forgot/:username",async (req,res)=>{
    try {
        const userupdation = await userdata.updateOne({
            username:req.params.username,
        },
        {
            $set:{
                password:req.body.password
            }
        }
        );
        
        res.json(userupdation);
    } catch (error) {
        res.send({
            message:error,
        });
    }
})

//check the username exists???

router.get("/check/:username",async(req,res)=>{
    console.log(req.params.username);
    try {
        const user = await userdata.find({
            username:req.params.username,
        });
        const isthere=Object.entries(user).length === 0;
        res.send(isthere);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});



// http://localhost:3000/users/remove/vidya123
router.delete("/remove/:username",async (req,res)=>{
    try {
        const userremoved = await userdata.remove({
            username:req.params.username,
        });
        res.json(userremoved);
    } catch (error) {
        res.send({
            message:error,
        });
    }
})

module.exports=router;