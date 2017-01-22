// build one function for each math operation
// each function needs to take in an array of objects from client.js
//based on math operation object, use correct function to math numbers and assign result to variable
//send variable to client.js
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var calculatorRouter = require('./routes/calculator');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.use('/math', calculatorRouter);

app.get('/', function(req, res) {
    var filename = path.join(__dirname, 'public/views/index.html');
    res.sendFile(filename);
});

app.listen(5000);
