/*
protocol => rules
Explanation:
To be able to do something on the internet, the developers
have made some rules , to follow those rules is compulsory and these rules
come pre installled in our operating system software.

http => protocol.
The https protocol is a protocol that we use to send and recieve
on the internet.
*/

const http = require("node:http");

const server = http.createServer(function(req, res) {
    res.end("Hello World! Server created");
});

server.listen(3000);