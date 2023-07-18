const express = require('express');
const path = require('path')
const port = 8000;


const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

//setting up view enjine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//from post req the form data is encoding into key value pairs
app.use(express.urlencoded());

//to get static files assets
app.use(express.static('assets'));

// const contactList = [
//     {
//         name:"athira",
//         phone:"9234567890"
//     },
//     {
//         name:"vikas",
//         phone:"9987654321"
//     },
//     {
//         name:"bhagavati",
//         phone:"9452160987"
//     }
// ];
//fetching db
app.get('/',function(req,res){
    Contact.find({})
    .then(contacts => {
        return res.render('home',
        {title:"Contact list",
         contact_list:contacts
        });
    })
    .catch(err => {
        console.log('Error in displaying a contact!', err);
        // Handle the error appropriately
    });
  
});

app.get('/practical',function(req,res){
   return res.render('practical',
   {title:"practical list"});
})

app.post('/create-contact',function(req,res){
    // return res.redirect('/practical')
    // contactList.push(req.body);
    //populating db
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then(newContact => {
        console.log('******', newContact);
        return res.redirect('back');
    })
    .catch(err => {
        console.log('Error in creating a contact!', err);
        // Handle the error appropriately
    });

   
});

// for delete contact
app.get('/delete-contact/',function(req,res){
    // console.log(req.query);
    //get the query from url
    let id= req.query.id;
      //deleteing from db
    Contact.findByIdAndDelete(id)
    .then(id=>{
        id
        return res.redirect('back');
    })
    .catch(err => {
        console.log('Error in deleting a contact!', err);
        // Handle the error appropriately
    });

    // let contactIndex = contacts.findIndex(contact => contact.id == id);

    // if(contactIndex != -1){
    //     contacts.splice(contactIndex,1);
    // }

});

// app.get('/delete-contact/:phone',function(req,res){
//     console.log(req.params);
//     let phone = req.params.phone;

// });

app.listen(port,(err)=>{
    if(err){
        console.log('error',err);
    }
    console.log("Yup! my server is ruuning on",port);

});


// //middleware1
// app.use(function(req,res,next){
//     console.log("middleware1");
//     next();
// });
// //middleware2
// app.use(function(req,res,next){
//     console.log("middleware2");
//     next();
// });