var express = require('express');
var logger = require('morgan');
var users = require('./routes/users');
var products =require('./routes/products');
var bodyParser = require('body-parser');
var mongoose = require('./configuration/database'); 
var path = require('path');

var jwt = require('jsonwebtoken');

var app = express();
app.set('secretKey', 'nodeRestApi'); // secret token

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extzended: false}));

app.get('/', function(req, res){
//  console.log(res)
res.json({"Hello tayeb" : "welcome to my application"});
});


// public route
app.use('/users', users);
// private route
app.use('/products', validateUser, products);
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
// handle 404 error
app.use(function(req, res, next) {
 let err = new Error('Not Found :(');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found :/"});
  else 
    res.status(500).json({message: "Something wrong :( "});
});
app.listen(4000, function(){
 console.log('Node server listening on port 4000 :D');
});


