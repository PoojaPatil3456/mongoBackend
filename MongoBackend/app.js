require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const connection="mongodb+srv://pooja:1234@cluster0.iq6rf.mongodb.net/Employee?retryWrites=true&w=majority";
const app=express()
const Employee=require('./employee')
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect(connection)
var conn = mongoose.connection
conn.on(('open'),()=>{
    console.log("Working");
})
app.use(express.json())
app.get('/allEmployees',async(req,res)=>{
    const user=await Employee.find();
    //console.log(user);
    res.send(JSON.stringify(user));
})
app.post('/saveEmployee', async(req,res) => {
    
    //console.log("Something...");
    const salt=await bcrypt.genSaltSync(10);
    const user = new Employee({
        id:req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hashSync(req.body.password,salt)
    })
    try{
        const username={user};
        const token = process.env.jwtKey
        const accessToken = jwt.sign(username,token)
        console.log(accessToken)
        const emp =  await user.save() 
        res.json(accessToken)
    }catch(err){
        res.send('Error')
    }
})
app.post('/validateEmployee', async(req,res) => {
    const {email,password}=req.body
})
app.listen(5000,()=>{
    console.log("Server Started");
})
