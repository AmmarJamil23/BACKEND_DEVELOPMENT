const express = require('express');
const app = express();

const userModel = require('./usermode');

app.get('/', (req, res) => {
    res.send("Hallo");
});

app.get('/create', async (req, res) => {
   let createuser = await userModel.create({
            name: "Ammar",
            email: "ammar@gmail.com",
            username: "alsoammar"
        });
        res.send(createuser);
        
});


app.get('/update', async (req, res) => {
  let updatedUser =  await userModel.findOneAndUpdate({username: "alsoammar"},{name: "ammarjamil"}, {new: true})
        res.send(updatedUser);
        
});


app.get('/read', async (req, res) => {
   let users = await userModel.find();
   res.send(users)
})
app.listen(3000);