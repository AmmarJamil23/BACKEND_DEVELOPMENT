const express = require('express');
const app = express();

app.use(express.json());

app.post('/userinfo', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email  || !age) {
        return res.status(400).json({ error: "Missing required fields"});
    }

    const message = `User ${name} is ${age} years old. Email: ${email}`;

    res.status(200).json({
        success: true,
        data: message
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})