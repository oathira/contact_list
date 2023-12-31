const mongoose =require('mongoose');

//creating schema
const contactSchema = new mongoose.Schema({
        name: {
           type:String,
           required:true
    },
        phone:{
            type:String,
            required:true
        }
  });

  //compiling our schema into a Model.
  const Contact =  mongoose.model('Contact', contactSchema);

  module.exports = Contact;