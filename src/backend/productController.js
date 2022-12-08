const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

//  this function is fetching the product that is topProduct,
//$eq Matches values that are equal to a specified value.
const getTopProducts = asyncHandler(async (req, res) => {
  const showTopProduct = await Product.find({ topProduct: { $eq: true } });
  if (showTopProduct) {
    res.json(showTopProduct);
  } else {
    res.status(404);
    throw new Error('Please select carousel item');
  }
});
