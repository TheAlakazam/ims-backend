const express = require('express');
const router = express.Router();
const itemController = require('../controllers').itemController;

router.get('/api/item', itemController.getAllItems);
router.get('/api/item/:id', itemController.getItem);
router.put('/api/item/:id', itemController.updateItem);
router.post('/api/item', itemController.createItem);
router.delete('/api/item/:id', itemController.deleteItem);

module.exports = router;
