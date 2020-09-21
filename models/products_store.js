const { Number } = require("mongoose");
const mongoose=require("mongoose");


const UsersScema=mongoose.Schema({
    name:{
        type:String,
    },
    url:{
        type:String,
    },
    type:{
        type:String,
    },
    price:{
        type:Number,
    },
    count:{
        type:Number,
    },
    Description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model("Products",UsersScema);
