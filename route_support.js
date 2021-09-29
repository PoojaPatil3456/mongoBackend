const {Module}=require('module');
router=require('express').Router();

router.get('/login',(req,res)=>{
    res.send("student:Welcome to login");
});

router.get('/profile',(req,res)=>{
    res.header({'name':'pooja'})
    res.send("Welcome to my site");
});

router.get('**',(req,res)=>{
    res.send("Please enter valid url");
});

module.exports=router;