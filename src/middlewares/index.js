// Middlewares de validação de dados da requisição:
const ValidateNewUser = require('./ValidateNewUser');
const ValidateLogin = require('./ValidateLogin');
const ValidateRecipe = require('./ValidateRecipe');
// Middlewares que lidam com JWT:
const GenerateWebToken = require('./GenerateWebToken');
const DecodeWebToken = require('./DecodeWebToken');

module.exports = {
  ValidateNewUser,
  ValidateLogin,
  ValidateRecipe,
  GenerateWebToken,
  DecodeWebToken,
};