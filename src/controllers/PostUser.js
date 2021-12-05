const { ValidateNewUser } = require('../validators');
const { InvalidEntries } = require('../errors');
const { User } = require('../models');

module.exports = async (req, res) => {
  const { error, value } = ValidateNewUser.validate(req.body);
  if (error) return res.status(422).json(InvalidEntries);
  const EmailExists = await User.findOne({ email: req.body.email }).exec();
  console.log(EmailExists);
  return res.status(200).send(value);
};