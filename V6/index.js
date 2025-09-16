const express = require('express');
const path = require('path');   // ✅ added path

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");   // make sure "views/index.ejs" exists
});

app.get('/page/:username', function(req, res) {
    // req.params.username
    res.send(req.params.username);
})


app.get('/page/:username/:age', function(req, res) {
    // req.params.username
    res.send("anything");
})

// app.get('/page/ammar', function(req, res) {
//     res.send("This page is for Ammar");
// })

app.listen(3000, function() {
    console.log("Port 3000 is listening");
});
