const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/studentRoute');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/strcutureDemo")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Connection failed", err));


app.use('/students', studentRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})