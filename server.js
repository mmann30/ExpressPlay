// Dependencies
var express = require('express');

var app = express();

// app.METHOD can be any HTTP request method
// here I am using the get method to get the request
// defined as '/' URI.
app.get('/', function(req, res) {
    // once the '/' request is received the server responds
    // with 'Testing' which will read out on the webpage.
    res.send('Testing');
});

// app.LISTEN starts the server on the designated PORT, in this case
// it is PORT 3000 a call back function then executes.
app.listen(3000, function() {
    console.log('Server On and listening on PORT 3000!');
});

