// Import express routes

const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        status : "API its working",
        message : "Welcome to resthub Backend App",
    })
});

router.post('/',(req,res)=>{
    res.send('Request Read Masuk');
});

router.put('/',(req,res)=>{
    res.send(
        "Request Put Masuk"
    );
});

router.delete('/',(req,res)=>{
    res.send(
        "Request Delete Masuk"
    );
});

module.exports = router;


