const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/students', async (req, res) => {
    try {
        const { name , email} = req.body;
        const student = await Student.create({ name, email });
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

router.post('/students/:studentId/enroll', async (req, res) => {
    try {
        const { studentId } = req.params;
        const { courseId } = req.body;

        const student = await Student.findById(studentId);

        if(!student) {
            return res.status(404).json({ error: "Student not found"});
        }

        if(!student.courses.includes(courseId)){
            student.courses.push(courseId);
            await student.save();
        }

        res.status(200).json(student);


    } catch(err) {
        res.status(400).json({ error: err.message});

    }
});

router.get('/students/:studentId', async (req, res) => {
    try {
        const { studentId} = req.params;

        const student = await Student.findById(studentId).populate("courses");

        if(!student) {
            res.status(404).json({ error: "Student not found"});
        }

        res.status(200).json(student);

    } catch (err) {
        res.status(400).json({ error: err.message});

    }
})



module.exports = router;