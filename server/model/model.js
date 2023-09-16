const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

const UserDb = mongoose.model('userdb', detailsSchema)
module.exports = UserDb