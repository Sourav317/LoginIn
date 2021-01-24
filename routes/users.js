const express = require('express');
const Tuna = express.Router();


Tuna.get('/check',(req,res)=>{
    res.send("Hi all");
});

const user_controllers = require('../Controllers/user_controller');

Tuna.get('/sign-in',user_controllers.sign);
Tuna.get('/sign-up',user_controllers.signUp);


// Tuna.get('/sign-in',(req,res)=>{
//     res.render('User_Signin');
// });


module.exports = Tuna;