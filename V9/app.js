const express = require('express');
const cookieParser  =require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cookieParser());


app.get("/", function (req, res) {
    let token = jwt.sign({email: "ammar@gmail.com"}, "secret");
    console.log(token);

    res.cookie("token", token);

    res.send("Hurrah")
})

app.get("/read", function(req, res) {
  let data =   jwt.verify(req.cookies.token, "secret")
    console.log(data);
    res.send("Hurrah 2")
})

// app.get("/", function(req, res) {
//     // res.cookie("name", "Ammr");
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("abcdfgefg", salt, function(err, hash) {
//         console.log(hash);
//             res.send("success")
//         })
//     })


    // res.send("done");
// });

// app.get("/create", function(req, res) {
    // console.log(req.cookies);

//     res.send("readpage");
// });

app.listen(3000)