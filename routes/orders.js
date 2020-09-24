const express = require("express");
// const mongoose=require("mongoose");
const router_order =express.Router();
cartdata=require("../models/cart");
wishlistdata=require("../models/wishlist");
router_order.use(express.json());

// router_order.get("/wishliststore/:userid",async(req,res)=>{
//     res.send(req.body);
// })


                                            // cart details here

router_order.post("/cartstore/:userid",async(req,res)=>{
   const cartsendata=new cartdata({
        userid:req.params.userid,
        listofProductids:req.body.products,
    }) ;
    try {
       const cardatasaved=await cartsendata.save();
       res.json(cardatasaved); 
    } catch (error) {
        res.send({
            message:error,
        })
    }
    
});


//check in cart false-data is there true--data is not there

router_order.get("/checkuserincart/:userid",async(req,res)=>{
    console.log(req.params.userid);
    try {
        const user = await cartdata.find({
            userid:req.params.userid,
        });
        const isthere=Object.entries(user).length === 0;
        res.send(isthere);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});

//get cartsdata by user id
router_order.get("/getcartdatabyid/:id",async(req,res)=>{
    console.log(req.params.id);
    try {
        const userlogin = await cartdata.find({
            userid:req.params.id,
        });
        
        res.json(userlogin);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});

//update the cart data
router_order.patch("/updatecartdata/:userid",async (req,res)=>{
    try {
        const userupdation = await cartdata.updateOne({
            userid:req.params.userid,
        },
        {
            $set:{
              listofProductids:req.body.products,
            }
        }
        );
        
        res.json(userupdation);
    } catch (error) {
        res.send({
            message:error,
        });
    }
})



                        //wishlist details here


router_order.post("/wishliststore/:userid",async(req,res)=>{
   const wishlistsendata=new wishlistdata({
        userid:req.params.userid,
        listofProductids:req.body.products,
    }) ;
    try {
       const wishlistdatasaved=await wishlistsendata.save();
       res.json(wishlistdatasaved); 
    } catch (error) {
        res.send({
            message:error,
        })
    }
});


//check in  wishlist false-data is there true--data is not there


router_order.get("/checkuserinwishlist/:userid",async(req,res)=>{
    console.log(req.params.userid);
    try {
        const user = await wishlistdata.find({
            userid:req.params.userid,
        });
        const isthere=Object.entries(user).length === 0;
        res.send(isthere);
    } catch (error) {
        res.send({
            message:error,
        });
  }
});

//get cartsdata by user id
router_order.get("/getwishlistdatabyid/:id",async(req,res)=>{
    console.log(req.params.id);
    try {
        const userlogin = await wishlistdata.find({
            userid:req.params.id,
        });
        
        res.json(userlogin);
    } catch (error) {
        res.send({
            message:error,
        });
    }
});
//update the wishlist data
router_order.patch("/updatewishlistdata/:userid",async (req,res)=>{
    try {
        const userupdation = await wishlistdata.updateOne({
            userid:req.params.userid,
        },
        {
            $set:{
              listofProductids:req.body.products,
            }
        }
        );
        
        res.json(userupdation);
    } catch (error) {
        res.send({
            message:error,
        });
    }
})




module.exports = router_order;



