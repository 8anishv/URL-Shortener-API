const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

//@routes  GET /:code
//@desc    to re-direct it to long Url

router.get("/:code" , async (req,res)=>{
    try {
        const url = await  Url.findOne({urlCode: req.params.code});
        if(url){
           return  res.redirect(url.longUrl)
        }else{
            return res.status(404).json("url not found")
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Server error")
    }
})
module.exports = router;