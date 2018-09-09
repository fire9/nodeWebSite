// server.js
// import the http module
// var http = require('http');

// handle sending requests and returning responses
// function handleRequests(req, res) {
    // return string
    // res.end('Hello, Node.JS');
//}

// create the server
// var server = http.createServer(handleRequests);


// start server and listen on port number
// server.listen(7788, function() {
//     console.log('Server is running on port 7788');
// });
/**
 * create server with express.js
 */
const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 7788;
const router = require("./app/routes");
app.use('/', router);

// run the server
app.listen(port, host, function() {
    console.log('Server is running on port 7788');
});
