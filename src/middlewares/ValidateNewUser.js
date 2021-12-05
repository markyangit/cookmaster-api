const { ValidateNewUser } = require('../validators');
const { InvalidEntries, EmailAlreadyExists } = require('../errors');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { error } = ValidateNewUser.validate(req.body);
  if (error) return res.status(400).json(InvalidEntries);
  
  const { email } = req.body;
  const EmailExists = await User.findOne({ email });
  if (EmailExists) return res.status(409).send(EmailAlreadyExists);

  if (!req.body.role) req.body.role = 'user';

  next();
};