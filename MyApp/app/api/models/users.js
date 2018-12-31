var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var saltRounds = 10;

var Schema = mongoose.Schema;
var UserSchema = new Schema({
firstname: {
  type: String,
  trim: true,  
  required: true,
 },
 lastname: {
    type: String,
    trim: true,  
    required: true,
   },
 username: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});
// hashage 
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});
module.exports = mongoose.model('User', UserSchema);