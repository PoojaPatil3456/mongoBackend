const express = require('express')
const app = express();
const employees = require('./employee')
app.use(express.json())
app.get('/employee', (req,res) =>{
    res.json(employees)
})
app.post('/employee', (req,res) => {
    const emp = {
        id : req.body.id,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        contact : req.body.contact
    }
    employees.push(emp)
    res.json(emp)
  })
  app.delete('/employee/:id', (req,res)=>{
    let id = req.params.id;
    let index = employees.findIndex((employee)=>{
      return (employee.id == Number.parseInt(id))
  })
  if(index >= 0){
      let emp = employees[index]
      employees.splice(index , 1)
      res.json(emp)
  }else{
      res.status(404)
      res.end()
  }
})
app.put('/employee/:id', (req, res) =>{
    let id = req.params.id
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let contact = req.body.contact
    let index = employees.findIndex((employee)=>{
        return (employee.id == Number.parseInt(id))
    })
    if(index >= 0){
        let emp = employees[index]
        emp.firstname = firstname
        emp.lastname = lastname
        emp.email = email
        emp.contact = contact
        res.json(emp)
    }else{
        res.status(404)
        res.end();
    }
console.log(id)
res.json(id)
})
app.listen(4000, (req,res) =>{
    console.log('Express API is running');
})

