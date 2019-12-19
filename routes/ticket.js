const express = require('express');
const router = express.Router();
const ticketController = require('../controllers').ticketController;

router.get('/api/ticket', ticketController.getAllTickets);
router.post('/api/ticket/related/', ticketController.getAllTicketsRelated);
router.get('/api/ticket/:id', ticketController.getTicket);
router.post('/api/ticket', ticketController.createTicket);
router.put('/api/ticket/:id', ticketController.updateTicket);
router.delete('/api/ticket/:id', ticketController.deleteTicket);

module.exports = router;
