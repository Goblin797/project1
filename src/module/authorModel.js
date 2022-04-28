// Author Model

const mongoose = require('mongoose');


 const authorSchema = new mongoose.Schema({

     "fname" : {

         type : String,

         required : [true,"efname is rquired"],

         trim : true

     },

     "lname" : {

        type : String,

        required : [true,"lname is required"],

        trim : true

    },

    "title" : {

        type : String,

        required : true,

        enum : ['Mr', 'Mrs', 'Miss'],

        trim : true

    },

    "email" : {

        type : String,

        required : true,

        unique : true,

        lowercase : true,

        trim:true,
        

    },

     "password" : {

        type : String,

        required : true,

        trim : true
        
    }
},



 {timestamps : true})

 module.exports = mongoose.model('ProjectAuthor', authorSchema);