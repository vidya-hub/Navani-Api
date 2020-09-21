const express = require("express");
const mongoose=require("mongoose");
const router_order =express.Router();
router_order.use(express.json());



router_order.get("/recieved",async(req,res)=>{
    res.send("orders");
})

module.exports = router_order;



