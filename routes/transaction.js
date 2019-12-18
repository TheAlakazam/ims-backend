const express = require('express');
const router = express.Router();
const transactionController = require('../controllers').transactionController;

router.get('/api/transaction', transactionController.getAllTransactions);
router.get('/api/transaction/:id', transactionController.getTransaction);
router.post('/api/transaction', transactionController.createTransaction);
router.put('/api/transaction/:id', transactionController.updateTransaction);
router.delete('/api/transaction/:id', transactionController.deleteTransaction);

module.exports = router;
