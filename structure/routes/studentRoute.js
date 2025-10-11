const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');


// CREATE student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ success: true, data: student });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


// READ all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json({ success: true, data: students });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});



router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,     
            req.body,           
            { new: true }       
        );

        if (!updatedStudent)
            return res.status(404).json({ success: false, message: "Student not found" });

        res.json({ success: true, data: updatedStudent });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent)
            return res.status(404).json({ success: false, message: "Student not found" });

        res.json({ success: true, message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


module.exports = router;

