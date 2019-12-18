const Ticket = require('../models').Ticket;

const getAllTickets = async (req, res) => {
  Ticket.findAll()
    .then(tickets => res.status(200).json({ tickets }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getTicket = async (req, res) => {
  Ticket.findByPk(req.params.id)
    .then(ticket => {
      if (ticket) return res.status(200).json({ ticket });
      throw new Error('Ticket with specific ID not found!!')
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const createTicket = async (req, res) => {
  Ticket.create(req.body)
    .then(ticket => res.status(200).json({ ticket }))
    .catch(err => res.status(500).json({ error: err.message }))
};

const updateTicket = async (req, res) => {
  Ticket.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(ticket => {
      if (ticket[0] !== 0) return res.status(200).json({ ticket });
      throw new Error('Ticket with specific ID not found!!')
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const deleteTicket = async (req, res) => {
  Ticket.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(ticket => {
      if (ticket) return res.status(204).json({ message: 'Ticket deleted successfully ' });
      throw new Error('Ticket with specific ID not found!!');
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
  createTicket
};
