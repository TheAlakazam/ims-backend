const Transaction = require('../models').Transaction

const getAllTransactions = async (req, res) => {
  Transaction.findAll()
    .then(transactions => res.status(200).json({ transactions }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getTransaction = async (req, res) => {
  Transaction.findByPk(req.params.id)
    .then(transaction => {
      if (transaction) return res.status(200).json({ transaction })
      throw new Error('Transaction with specific ID not found')
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const createTransaction = async (req, res) => {
  Transaction.create(req.body)
    .then(transaction => res.status(201).json({ transaction }))
    .catch(err => res.status(400).json({ error: err.message }));
};

const updateTransaction = async (req, res) => {
  Transaction.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(transaction => {
      if (transaction[0] !== 0) return res.status(200).json({ transaction })
      throw new Error('Transaction with specific ID not found !!');
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const deleteTransaction = async (req, res) => {
  Transaction.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(transaction => {
      if (transaction) return res.status(204).json({ message: 'Transaction deleted successfully ' });
      throw new Error('Transaction with specific ID not found!!');
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  getAllTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
};
