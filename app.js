var express = require('express');
var app = express();
var path = require('path');


app.use('/static', express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log("starting server now");
app.listen(5000);
