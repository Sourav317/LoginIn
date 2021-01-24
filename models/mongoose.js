///create DB connection here 
const mongoose = require('mongoose');

//creating schema
const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required:true,
        unique : true

    },
    password : {
        type : String,
        required : true

    },
    name : {
        type: String,
        required : true
    }
},{
    timestamps : true
});

//adding to models
const user = mongoose.model('user',UserSchema); 

//exporting
module.exports = user;

