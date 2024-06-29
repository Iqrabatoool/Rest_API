//Boiler plate
const express = require('express');
let users = require("./MOCK_DATA.json")
const app = express();
const fs = require('fs');
const PORT = 8000;

//Plugin
app.use(express.urlencoded({extended : false}));

//Routers
app.get('/api/users', (req,res)=>{
  return res.json(users);
})

app.route('/api/users/:id')

.get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user) =>user.id === id);
  return res.json(user);
})

//Making a New User
app.post("/api/users",(req,res)=>{
  const body = req.body;
  console.log(body);
  users.push({...body,id :users.length+1});
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err , data)=>{
    return res.json({status :"Success" , id : users.length})
  })
 
})

//Edit user
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  console.log(body);
  let userIndex = users.findIndex((user) => user.id === id); 
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...body };
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err,data) => {
      return res.json({ status: "success", id: id });
    });
  } 
});

//Delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id); 
  users = users.filter((user) => user.id !== id);
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    return res.json({ status: "success", id: id });
  });
});

app.listen(PORT , () =>{ console.log(`Server Bagh raha ha ${PORT}`)})

