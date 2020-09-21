const express = require("express");
const mongoose=require("mongoose");
const router_product =express.Router();
router_product.use(express.json());
product_data=require("../models/products_store");
router_product.use(express.static('./'));
// router_product.engine('html', require('ejs').renderFile);

router_product.get("/",function(req,res){
    res.render('index.html' );   
})
router_product.post("/submit",async(req,res)=>{
    
    // console.log(req);   
    if (req.method === 'POST') {
        console.log(req.body.type);
        // console.log()
        var sendproductdata=new product_data({
            name:req.body.name,
            url:req.body.url,
            type:req.body.type,
            price:req.body.price,
            count:req.body.count,
            Description:req.body.Description
        });
        try {
            const saveddata=await sendproductdata.save();
            console.log(saveddata);
        } catch (error) {
            res.send(
                {
                    message:error,
                }
            )
        }
        res.render("productdetails.html",{name:req.body.name,url:req.body.url,type: req.body.type,price:req.body.price,count:req.body.count,Description:req.body.Description,});
        
};
}
)
router_product.get("/allproducts",async(req,res)=>{
    try {
        const users = await product_data.find();
        res.send(users);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});


module.exports = router_product;

