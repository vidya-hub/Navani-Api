const express=require("express");
const mongoose=require("mongoose");


//heroku commands
// start locally -- heroku local web
// to push code in git   git add .   git commit -m "commit name"  git heroku push
// heroku open  for open url globally

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


const PORT = process.env.PORT || 5000

app.listen(PORT,(req,res)=>{
    console.log(`Listening on ${ PORT }`);

});
