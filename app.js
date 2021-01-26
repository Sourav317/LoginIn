const express = require('express');
const mongoose = require('mongoose');

const db = require('./Config/mongod_connect');

const app = express();
//adding routers
const tuna1 = require('./Routes/users');

app.set('view engine','ejs');
app.set('views','./Views');

app.use('/au',tuna1);
// app.use(express.static,('./Fish'));


const PORT = 5000 || process.env.PORT;

app.get("/",(req,res) =>{
    res.send("THis is my home Page.....Cool");
});

app.listen(PORT , console.log(`Server is running on ${PORT}`));