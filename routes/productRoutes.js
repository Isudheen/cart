const express = require('express');

const productController = require('../controllers/productController');
const imageUpload = require('../utilities/imageUpload');

const router = express.Router();
router
  .route('/')
  .post(
    imageUpload.uploadSingleImage,
    imageUpload.resizeImage,
    productController.createProduct
  )
  .get(productController.getProducts);

router
  .route('/:id')
  .get(productController.getProductById)
  .delete(productController.removeProduct);

module.exports = router;
