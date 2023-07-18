//require library
const mongoose = require('mongoose');

//connect to library
mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');

//aqurie the connection(to check it is sucessful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up  and running then print message
db.once('open',function(){
    console.log('succesfully connnected to the database');
});