const router = require('express').Router();
const productController = require('./controller');

router
  .get('/product', productController.getAllProductWithQuery)
  .get('/product/:id', productController.getDetailProduct)
  .post('/product', productController.CreateProduct)
  .put('/product/:id', productController.UpdateProduct)
  .delete('/product/:id', productController.DeleteProduct);

module.exports = router;
