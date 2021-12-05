const { ValidateNewUser } = require('../validators');
const { InvalidEntries, EmailAlreadyExists } = require('../errors');
const { User } = require('../models');

module.exports = async (req, res) => {
  const { error, value } = ValidateNewUser.validate(req.body);
  if (error) return res.status(400).json(InvalidEntries);
  const { email } = req.body;
  const EmailExists = await User.findOne({ email });
  if (EmailExists) return res.status(409).send(EmailAlreadyExists);
  if (!req.body.role) req.body.role = 'user';
  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).send({ user: { name: newUser.name, email: newUser.email, role: newUser.role } });
};