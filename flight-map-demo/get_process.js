var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/view/flight-map.html");
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
