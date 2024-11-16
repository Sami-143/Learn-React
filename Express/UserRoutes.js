const express = require('express')
const router = express.Router();

const userRegister = require("./UserController")//import functionality
router.route("/api/v1/login").post(userRegister).get((req,res)=>{
    res.send("wow")
});

module.exports = router;
