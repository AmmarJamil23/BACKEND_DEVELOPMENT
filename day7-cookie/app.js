const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
);

app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.user = username;
    res.send("User logged in with sesssion");
});

app.get('/profile', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome back, ${req.session.user}`);
    } else {
        res.status(401).send("Not logged in");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000")

}
)
