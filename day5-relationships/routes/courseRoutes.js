const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


router.post('/courses', async (req, res) => {
    try {
        const {title, description } = req.body;
        const course = await Course.create({ title, description});
        res.status(201).json(course);
    } catch (err){
        res.status(400).json({ error: err.message });
    }
});
module.exports = router;