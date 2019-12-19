const authController = require('../controllers').authController;
const express = require('express');
const router = express.Router();

router.post('/auth/login', authController.authenticateUser);

module.exports = router;
