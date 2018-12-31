//mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/database_test';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;