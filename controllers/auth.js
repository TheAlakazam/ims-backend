const User = require('../models').User;
const jwt = require('jsonwebtoken');

const JWT_ENCRYPTION = process.env.JWT_ENCRYPTION;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      user_login: username
    }
  })
    .then(user => {
      if (user) {
        const isValidPassword = user.validPassword(password);
        if (isValidPassword) {
          const token = jwt.sign(user.dataValues, JWT_ENCRYPTION, { expiresIn: '2 days' });
          return res.status(200).json({ token });
        }
      }
      throw new Error('Username or Password is Incorrect !!');
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

module.exports = {
  authenticateUser
};
