var express = require('express');
var app = express();
var path = require('path');


app.use('/static', express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

console.log("starting server now, visit at http://localhost:5000/");
app.listen(5000);
