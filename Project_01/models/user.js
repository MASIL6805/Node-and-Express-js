const mongoose = require('mongoose');

//schema

const userSchema = new mongoose.Schema({
    first_name: {
        type :String,
        required: true
    },
    last_name: {
         type :String,
       // required: true//necsessary field to take
    },
    email: {
       type :String,
        required: true,
        unique: true    
    },
    job_title: {
        type :String,
    },
    gender: {
        type :String,
        //required: true
    },
    
},
{    timestamps: true}//shows when createdAt , updatedAt
);

//model
const User = mongoose.model('user', userSchema);

module.exports = User;