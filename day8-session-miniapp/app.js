const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false},
    })
);

const USERS = [
    {username: "Ammar", password: "12345"},
    {username: "ali", password: "54321"},
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = USERS.find(
        (u) => u.username === username && u.password === password
    );

    if(!user) {
        return res.status(401).json({ message: "Invalid credentials"});
    }

    req.session.user = user;
    res.json({ message: `Welcome ${user.username}, you are logged in !`});
});


app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "You are not logged in "});

    }

    res.json({
        message: `Welcome back, ${req.session.user.username}`,
        user: req.session.user
    })
});



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})