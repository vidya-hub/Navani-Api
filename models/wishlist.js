const mongoose=require("mongoose");

const wishlistUpdate=mongoose.Schema({
    userid:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
    },
   listofProductids:{
        type:[]
    }, 
});

module.exports=mongoose.model("wishlistcollection",wishlistUpdate);