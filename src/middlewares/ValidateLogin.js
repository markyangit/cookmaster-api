const { ValidateLogin } = require('../validators');
const { AllFieldsMustBeFilled, IncorrectUsernameOrPassword } = require('../errors');
const { User } = require('../models');

const checkUserLoginData = async ({ email, password }) => {
  const [getUserByEmail] = await User.find({ email });
  if (!getUserByEmail) return IncorrectUsernameOrPassword;

  if (getUserByEmail.password !== password) return IncorrectUsernameOrPassword;
};

module.exports = async (req, res, next) => {
  const { error } = ValidateLogin.validate(req.body);
  if (error) return res.status(401).send(AllFieldsMustBeFilled);

  const isNotValid = await checkUserLoginData(req.body);

  if (isNotValid) return res.status(401).send(IncorrectUsernameOrPassword);

  next();
};