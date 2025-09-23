const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const userModel = require("./models/user");

const postModel = require("./models/post");

const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");

const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());


app.post('/register', async (req, res) => {
    let {email, password, username, name, age} = req.body;

   let user = await  userModel.findOne({email})
   if(user) return res.status(500).send("User ALready Registered");

   bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user =  userModel.create({
            username,
            email,
            age,
            name,
            password: hash
        })

      let token =   jwt.sign({email: email, userid: user._id}, "secret");
      res.cookie("token", token);
      res.send("registered");
    })

   })
})


app.post('/login', async (req, res) => {
    let {email, password} = req.body;

   let user = await  userModel.findOne({email})
   if(!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if(result) res.status(200).send("You can login");
    else res.redirect("/login");
  })
})


app.get('/logout', async (req, res) => {
   res.cookie("token", "");
   res.redirect("/login");
})


function isLoggedin(req, res, next) {
    if(req.cookies.token === "") res.send("you must be logged in");
    else {
       let data = jwt.verify(req.cookies.token, "secret");
    }
    next()
}


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render("login")
})


app.listen(3000, () => {
    console.log("This port 3000 is running");
})