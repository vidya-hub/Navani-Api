const express=require("express");
const mongoose=require("mongoose");

const routes=require("./routes/routes")
const app=express();
require("dotenv/config");
//middle ware
app.use(express.json());
app.use("/users",routes);

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log("connected");
})

app.get("/",(req,res)=>{

    res.send("first page");
})




app.listen(3000,(req,res)=>{
    console.log("server at 3000");

});
