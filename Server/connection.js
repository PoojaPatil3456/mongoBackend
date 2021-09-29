const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const connection="mongodb+srv://pooja:123@cluster0.iq6rf.mongodb.net/Employee?retryWrites=true&w=majority";
const app=express()

mongoose.connect(connection)
var conn = mongoose.connection
conn.on(('open'),()=>{
    console.log("Working");
})
app.use(express.json())

const user=require('./user')
app.use('/employee',user)

app.listen(3000,()=>{
    console.log("Server Started");
})
