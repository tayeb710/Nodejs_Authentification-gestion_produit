var userModel = require('../models/users');
var bcrypt = require('bcrypt'); 
var jwt = require('jsonwebtoken');

module.exports = {

 create: function(req, res, next) {
 
  userModel.create({ 
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username, 
      email: req.body.email, 
      password: req.body.password }, function (err, result) {
      if (err) 
       next(err);
       
      else{
         console.log("success");
       res.json({status: "success", message: "User added :D", data: null});
     }
    });
 },

authenticate: function(req, res, next) {
  userModel.findOne({username:req.body.username}, function(err, user_Info){
     if (err) {
      next(err);
     } else {
      console.log(user_Info);
if(bcrypt.compareSync(req.body.password , user_Info.password)) {
const token = jwt.sign({id: user_Info._id}, req.app.get('secretKey'), { expiresIn: '1h' });
res.json({status:"success", message: "utilisateur trouvé", data:{user: user_Info, token:token}});
}else{
res.json({status:"error", message: "Invalid username/password", data:null});
}
     }
    });
 }
}