const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get('/', (req, res) => {
    res.send("Base or BoilerPlate code")
});

app.get('/create', async (req, res) => {
   let user = await userModel.create({
        username: "ammar",
        age: 25,
        email: "ammar@gmail.com"
    });

    res.send(user);
});


app.get('/post/create', async (req, res) => {
   let post = await postModel.create({
        postdata: "this is post data",
        user: "68d103bbfdaef16f34da513e"
    })
   
    let user = await userModel.findOne({_id: "68d103bbfdaef16f34da513e"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
});

app.listen(3000, () => {
    console.log("Running");
});
