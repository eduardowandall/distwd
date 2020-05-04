const express = require('express');
const ProductController = require('./controllers/ProductController');
const CustomerController = require('./controllers/CustomerController');
const PromotionController = require('./controllers/PromotionController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.post('/products', ProductController.store);
routes.get('/products/:barcode', ProductController.index);

routes.post('/promotions', PromotionController.store);
routes.get('/promotions', PromotionController.index);

routes.post('/customers', CustomerController.store);
routes.put('/customers', CustomerController.update);
routes.get('/customers/:barcode', CustomerController.index);

routes.post('/devs/:devId/dislikes', DislikeController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;