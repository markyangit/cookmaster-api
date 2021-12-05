const { ValidateNewUser } = require('../validators');
const { InvalidEntries } = require('../errors');

module.exports = (req, res) => {
  const { error, value } = ValidateNewUser.validate(req.body);
  if (error) return res.status(422).json(InvalidEntries);
  return res.status(200).send(value);
};