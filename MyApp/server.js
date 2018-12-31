var express = require('express'); 
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
 res.json({"Hello" : "NodeJs-App"});
});
app.listen(4000, function(){ console.log('Node server listening on port 4000');});