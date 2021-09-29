
var app=require('express')();
app.use('/student/profile',mid1,mid2);
app.use('/student',require('./route_support'))

function mid1(req,res,next){

    console.log("hello from middleware1");
    next();
    //res.end();
}
function mid2(req,res,next){

    console.log("hello from middleware2");
    next();
    //res.end();
}

app.listen(2000)