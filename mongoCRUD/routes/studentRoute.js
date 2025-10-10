const express = require('express');
const router = express.Router();

const Student = require('../models/studentModel');


// Create => Add new student
router.post('/students', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.join({ success: true, data: student});
    } catch (err) {
        res.status(500).json({ success: false, message: err.message});
    }
})

// Read => Get all students

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json({ success: true, data: students});
    } catch (err){
        res.status(500).json({ success: false, message: err.message});
    }
});

// Update => Update student by ID

router.put('/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndDelete(req.params.id, req.body, { new: true});
        if(!updatedStudent){
            return res.status(404).json({ success: false, message: 'Student not found'})
        }
        res.json({ success: true, data: updatedStudent});
    } catch (err) {
        res.status(500).json({ success: false, message: err.message});
    }
});

// Delete => Delete all student by ID

router.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;