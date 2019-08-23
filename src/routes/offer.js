const OfferController = require('../controllers/OfferController');

module.exports = [
  {
    version: 'v1',
    path: 'offers',
    method: 'get',
    action: OfferController.find
  }
];
