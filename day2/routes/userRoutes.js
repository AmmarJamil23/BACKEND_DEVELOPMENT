const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "All users fetched successfully"});
});

router.post('/', (req, res) => {
    const user = req.body;
    res.json({ message: "New user created", user});
});
module.exports = router;


