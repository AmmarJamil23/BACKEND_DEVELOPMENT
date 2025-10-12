const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors());


const courseRoutes = require('./routes/courseRoutes');
app.use('/api', courseRoutes);

const studentRoutes = require('./routes/studentRoutes');
app.use('/api', studentRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB connected successfully"))
 .catch((err) => console.log("MongoDB connection error", err));

app.get("/", (req, res) => {
    res.send("Server is running...")
});

app.listen(3000, () => {
    console.log("Server running on localhost")
})