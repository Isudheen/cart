const productRepository = require('../repositories/productRepository');
const catchAsync = require('../utilities/catchAsync');

exports.createProduct = catchAsync(async (req, res, next) => {
  const payload = {
    name: req.body.name,
    price: req.body.price,
    image: req.file.fileName,
  };

  const product = await productRepository.createProduct({ ...payload });
  res.status(200).json({
    status: true,
    data: product,
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await productRepository.products();

  res.status(200).json({
    status: true,
    data: products,
  });
});
exports.getProductById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const product = await productRepository.productById(id);

  res.status(200).json({
    status: true,
    data: product,
  });
});

exports.removeProduct = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const product = await productRepository.removeProduct(id);

  res.status(200).json({
    status: true,
    data: product,
  });
});
