var express = require('express');
var router = express.Router();
var userController = require('../app/api/controlleurs/users');

router.post('/signup', userController.create);
router.post('/authentification', userController.authenticate);
module.exports = router;