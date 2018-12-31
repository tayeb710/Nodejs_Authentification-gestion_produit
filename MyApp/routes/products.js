var express = require('express');
var router = express.Router();
var productController = require('../app/api/controlleurs/products');

router.get('/',productController.getAll);
router.post('/', productController.create);
router.get('/:productId', productController.getById);
router.put('/:productId', productController.updateById);
router.delete('/:productId', productController.deleteById);
module.exports = router;