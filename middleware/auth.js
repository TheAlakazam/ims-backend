const jwt = require('jsonwebtoken');
const JWT_ENCRYPTION = process.env.JWT_ENCRYPTION;

const isAuth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header === 'undefined') return res.status(400).json({ error: 'Auth token not provided' });
  const token = header.split(' ')[1];
  jwt.verify(token, JWT_ENCRYPTION, (err, decodedData) => {
    if (err) {
      console.log('Could not connect to authorized route' + err);
      res.sendStatus(403);
    } else {
      next();
    }
  });
}

module.exports = isAuth;
