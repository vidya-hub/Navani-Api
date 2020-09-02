const mongoose=require("mongoose");


const UsersScema=mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model("users",UsersScema);
