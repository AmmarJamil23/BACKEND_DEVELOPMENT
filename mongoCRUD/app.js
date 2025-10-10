const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/studentRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => {
    console.log('MOngoDB connected successfully')
  })
  .catch(err => console.log('Connection failed', err));

app.use('/api', studentRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});