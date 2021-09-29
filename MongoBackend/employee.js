const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    id:{
        type:Number
    } ,
    name:{
        type:String
    },
    password:{

    },
    email:{
        type:String
    }
})

module.exports=mongoose.model('Emp',employeeSchema)