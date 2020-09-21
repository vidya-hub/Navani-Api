const mongoose=require("mongoose");

const order=mongoose.Schema({
    order_id:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now,
    },
    userid:{
        type:String
    },
});

module.exports=mongoose.model("orders",UsersScema);