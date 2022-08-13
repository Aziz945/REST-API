const express = require("express");

const router = express.Router();
const Contact = require("../models/User");
const controllers = require("../controllers/userController");

//TEST
router.get("/hello",(req,res)=>{
    res.send("hello routing")
})

// GET ALL
router.get("/",async(req,res)=>{
    try {
        const result = await User.find();
        res.status(200).send({result:result,msg:"geting contacts successfully"})
    } catch (error) {
        res.status(400).send({msg:"can not get contacts"})
    }
})



//POST

router.post("/name",controllers.postUser);



//PUT
router.put("/:id",async(req,res)=>{
    try {
       const result  = await User.updateOne({_id:req.params.id},{$set:{...req.body}})
       result.nModified
       ? res.send({message:"user updated..."})
       : res.send({msg:"contact already updated"});
    } catch (error) {
        res.send({msg:"there is no user with this id"})
    }
})



//DELETE ONE

router.delete('/:id',async(req,res)=>{
    try {
        const result = await User.deleteOne({_id:req.params.id});
        result.n ? res.status(200).res.send({response:"user deleted..."})
        :res.status(400).send({msg:"there is no user with this id"})    
    } catch (error) {
        res.status(500).send({msg:"can not delete contact"})
    }
})



//GET ONE CONTACT

router.get("/:id",async(req,res)=>{
    try {
        const result = await User.findOne({_id:req.params.id});
        res.status(200).send({result:result,msg:"geting user by id successfully"})
    } catch (error) {
        res.status(400).send({msg:"can not get users"})
    }
})





module.exports = router;