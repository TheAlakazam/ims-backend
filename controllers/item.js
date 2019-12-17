const Item = require('../models').Item;

const getAllItems = async (req, res) => {
    Item.findAll()
    .then(items => res.status(200).json({ items }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const createItem = async (req, res) => {
    Item.create(req.body)
    .then(item => res.status(200).json({ item }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getItem = async (req, res) => {
    Item.findByPk(req.params.id)
    .then(item => {
        if(item) return res.status(200).json({ item });
        throw new Error(" Item with specific ID not found!!");
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const updateItem = async (req, res) => {
    const { id } = req.params;
    Item.update(req.body, { where: {
        id: id
    }})
    .then(item => {
        if(item[0] != 0) return res.status(200).json({ message: "Item was updated successfully " });
        throw new Error("Item with specific ID not found!!");
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const deleteItem = async (req, res) => {
    const { id } = req.params;
    Item.destroy({ where: {
        id: id
    }})
    .then(item => {
        if(item) return res.status(204).json({ message: "Item deleted successfully !!" });
        throw new Error("Item with specific ID not found!!");
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
    createItem,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
};