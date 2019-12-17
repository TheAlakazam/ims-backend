const User = require('../models').User;

const createUser = async (req, res) => {
    User.create(req.body)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(400).json({ error: err.message }));
};

const getAllUsers = async (req, res) => {
    User.findAll()
    .then(users => res.status(200).json({ users }))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getUser = async (req, res) => {
    User.findByPk(req.params.id)
    .then(user => {
        if(user) {
            return res.status(200).json({ user });
        }
        throw new Error("User with specific ID not found!!!");
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    User.update(req.body, { where: {
        id: id
    }, individualHooks: true })
    .then(user => {
        if(user[0] != 0) return res.status(200).json({ user });
        throw new Error("User with specific ID not found!!!");
        })
    .catch(err => res.status(500).json({ error: err.message }));
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    User.destroy({ where: { id: id}})
    .then(user => {
        if(user) return res.status(204).json({ user });
        throw new Error("User with specific ID not found!!!")})
    .catch(err => res.status(500).json({ error: err.message }));
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser  
};