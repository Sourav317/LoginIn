const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const cookieparser = require('cookie-parser');


const app = express();

//connecting to mongodb and the folder where schema is defined
const db = require('./Config/mongod_connect');
const user = require('./models/mongoose');

app.use(express.urlencoded());

app.use(cookieparser());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


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