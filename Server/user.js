const express=require('express')
const {Module}=require('module');
router=require('express').Router();
const Employee=require('./employee')

router.get('/',async(req,res)=>{
    try{
        const employee= await Employee.find()
        res.json(employee)
    }catch(err){
        res.send(err)       
    }
});
    
router.post('/save',async(req,res)=>{
    const empObj=new Employee({
        id : req.body.id,
        name : req.body.name,
        password : req.body.password,
        email : req.body.email
    })
    try{
        const emp=await empObj.save()
        res.json(emp)
    }catch(err){
        res.send(err)
    }
});

module.exports=router;