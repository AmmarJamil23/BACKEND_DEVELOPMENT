
const express = require("express")
const app = express()

//this function will run first before request reach route
// app.use(function(res, req, next) {
//     console.log("Middle ware");
//     next();
// });

// app.use(function(res, req, next) {
//     console.log("Middle ware 2nd Time");
//     next();
// });



app.get("/", function(req, res) {
    res.send("Hello Run ");
});

app.get("/page2", function(req, res) {
    res.send("This is second page as in 2 okayy");
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something happend!')
} )
app.listen(3000);