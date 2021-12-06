const jwt = require('jsonwebtoken');
const { MissingAuthToken } = require('../errors');
const { User } = require('../models');

const secret = 'meusegredo';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send(MissingAuthToken);

  try {
    const { data } = jwt.verify(token, secret);
    const { _id: userId } = await User.findOne({ email: data });
    req.user = userId;
  } catch ({ message }) {
    return res.status(401).send({ message });
  }

  next();
};