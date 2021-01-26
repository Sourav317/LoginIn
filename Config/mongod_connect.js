const mongoose= require('mongoose');

//setting the connection to db with db name Manual_AUT
mongoose.connect('mongodb://localhost:27017/Manual_AUT', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//checking connection
db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log("Successfully connected to db");
});