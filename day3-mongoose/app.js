const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log(" MongoDB connected successfully"))
  .catch(err => console.log("Connection failed:", err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const Student = mongoose.model('Student', studentSchema);

app.post('/student', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const student = new Student({ name, age, email });
    await student.save();
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/students', async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.json({ success: true, data: allStudents});
    }
    catch(err) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
})

app.listen(3000, () => console.log(" Server running on port 3000"));
