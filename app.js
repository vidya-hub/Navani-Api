const express=require("express");
const mongoose=require("mongoose");
var body_parser=require(
    "body-parser"
);

//heroku commands
// start locally -- heroku local web
// to push code in git   git add .   git commit -m "commit name"  git  push heroku master
// heroku open  for open url globally

const routes=require("./routes/routes");
const router_product=require("./routes/product");



const app=express();
app.use(body_parser.urlencoded({extended:false}));
require("dotenv/config");
//middle ware
app.use(express.json());
app.use("/users",routes);
app.use(express.static('./'));
app.use("/products",router_product);
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log("connected");
})
// app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.get("/",(req,res)=>{
    res.send("Navaani");
});
const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`Listening on ${ PORT }`);

});
