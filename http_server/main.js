var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.post('/', function(req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello post');
});

app.delete('/del_user', function(req, res) {
    console.log('Got a DELETE request for /del_user');
    res.send('Hello delete');
});

app.get('/list_user', function(req, res) {
    console.log('Got a GET request for /list_user');
    res.send('Page Listing');
});

app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send("Request for ab*cd");
});


var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s%s", host, port);
});

console.log('Server running at http://localhost:8080/');
