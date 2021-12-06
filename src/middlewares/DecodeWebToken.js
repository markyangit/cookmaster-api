const jwt = require('jsonwebtoken');
const { JwtMalformed } = require('../errors');

const secret = 'meusegredo';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send(JwtMalformed);

  try {
    const decoded = jwt.verify(token, secret);
  } catch ({ message }) {
    return res.status(401).send({ message });
  }

  next();
};