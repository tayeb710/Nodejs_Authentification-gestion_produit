var productModel = require('../models/products');
module.exports = {

  create: function(req, res, next) {
  
    productModel.create({ 
      reference: req.body.reference,
      prodname :req.body.prodname,
      production_date: req.body.production_date,
      expire_date : req.body.expire_date,
      quantity: req.body.quantity ,
      price: req.body.price}, function (err, result) {

      if (err) 
         next(err);
        else{
          //console.log(req.body.reference);
         res.json({status: "success", message: "Product added ", data: null});
        }
      });
   },

getAll: function(req, res, next) {
  let productsList = [];
productModel.find({}, function(err, products){
   if (err){
    next(err);
   } else{
    for (let product of products) {productsList.push({
      id: product._id,       
      reference: product.reference, 
      prodname:product.prodname,
      production_date: product.production_date,
      expire_date:product.expire_date,
      quantity: product.quantity,
      price:product.price});
    }
    res.json({status:"success", message: "Products list ", data:{products: productsList}});
       
   }
});
 },
 getById: function(req, res, next) {
  console.log(req.body);
  productModel.findById(req.params.productId, function(err, product_Info){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Product found ", data:{products: product_Info}});
   }
  });
 },
updateById: function(req, res, next) {
  productModel.findByIdAndUpdate(req.params.productId,{
    reference:req.body.reference,
    prodname:req.body.prodname,
    production_date:req.body.production_date,
    expire_date : req.body.expire_date,
    quantity:req.body.quantity,
    price: req.body.price}, function(err, product_Info){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Product updated", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  productModel.findByIdAndRemove(req.params.productId, function(err, product_Info){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Product deleted ", data:null});
   }
  });
 },

}