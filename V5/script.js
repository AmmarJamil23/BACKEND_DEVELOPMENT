// console.log("Islamabad")
const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", function(req, res) {
    res.send("This is the default page");
});

app.listen(3000);



