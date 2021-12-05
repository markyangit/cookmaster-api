const jwt = require('jsonwebtoken');

const secret = 'meusegredo';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = (req, _res, next) => {
  const { email } = req.body;
  req.body.token = jwt.sign({ data: email }, secret, jwtConfig);

  next();
};