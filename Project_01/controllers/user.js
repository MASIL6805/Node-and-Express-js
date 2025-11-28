const User = require('../models/user');
// const express = require('express');
// const app = express();
//

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
async function handleGetAllUsers(req,res) {
    const allDbUsers= await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res) {
     const user= await User.findById(req.params.id);
    //  const id =Number(req.params.id);//using number because id is in string form 
    // const user=users.find(user=>user.id===id);
    if (!user) return res.status(404).json({error:"user not found"})
    return res.json(user)
}

async function UpdateUserById(req,res) {
     await User.findByIdAndUpdate(req.params.id,req.body);
    //partial edit user with id e.g email
    return res.json({status:'success'})
}

async function handleDeleteUserById(req,res) {
  await User.findByIdAndDelete(req.params.id);
    //dalete user with id
    return res.json({status:'success'})
}

async function handleCreateNewUserById(req,res) {
     const body = req.body;
    if(!body|| !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return res.status(400).json({msg:'all fields required'})
    }
    const result= await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender

});
    return res.status(201).json({msg:'user created',id:result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    UpdateUserById,
    handleDeleteUserById,
    handleCreateNewUserById
};