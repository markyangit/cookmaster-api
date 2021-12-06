const { InvalidEntries } = require('../errors');
const { ValidateRecipe } = require('../validators');

module.exports = (req, res, next) => {
  const { error } = ValidateRecipe.validate(req.body);
  if (error) return res.status(400).send(InvalidEntries);

  next();
};