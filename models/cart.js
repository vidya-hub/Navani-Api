const mongoose=require("mongoose");

const cartUpdate=mongoose.Schema({
    userid:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
    },
   listofProductids:{
            type: []
    }, 
});

module.exports=mongoose.model("cartcollection",cartUpdate);