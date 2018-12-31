var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
 reference: {
  type: String,
  trim: true,  
  required: true,
 },
 prodname: {
    type: String,
    trim: true,  
    required: true,
   },
 production_date: {
  type: Date,
  trim: true,
 required: true
 },
 expire_date: {
    type: Date,
    trim: true,
   required: true
   },
 quantity :{
     type :Number,
     trim :true,
     required :true
 },
 price :{
     type : Number,
     trim : true,
     required :true
 }
});
module.exports = mongoose.model('Product', ProductSchema)