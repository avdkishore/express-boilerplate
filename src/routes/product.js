const ProductController = require('../controllers/ProductController');

module.exports = [
  {
    version: 'v1',
    path: 'products',
    method: 'get',
    action: ProductController.find
  }
];
