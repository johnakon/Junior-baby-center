const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const passportLocalMongoose = require('passport-local-mongoose');

//schema definition
const registerSchema = new mongoose.Schema({
    parentId: {type: String,required: 'Please Enter first name'},
    parentname: {type: String, required: "please enter the parents name"},
    childsname: {type: String, required: "please enter childs name"},
    childsage: {type: String, required: "please enter the childs name!"},
    childid: {type: String, required: "plese enter the childs ID"},
    email: {type: String,required: 'Please Enter email'},
    dob: {type: String, required: "Please eneter the childs date of birth"},
    address: {type: String,required: 'Please Enter first name'},
    club: {type: String,required: 'Please Enter your preffered club'},
    babysitter: { type: String, required: "Please select a baby sitter from the list"},
    telno: {type: String,required: 'Please Enter telephone number'},
    username: {type: String, unique: true, required: 'Please Enter user name'},
    password: { type: String,required: 'Please Enter password'}

})
registerSchema.add({ username: {type: String, unique: true, required: 'Please Enter first name' } });


registerSchema.plugin(passportLocalMongoose);
// Model creation
module.exports = mongoose.model("Register", registerSchema)

