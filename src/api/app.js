const express = require('express');

const { ValidateNewUser, ValidateLogin, GenerateWebToken } = require('../middlewares');
const { UserRoute } = require('../routes');
const { Login } = require('../controllers');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (_request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', ValidateNewUser, UserRoute);

app.post('/login', ValidateLogin, GenerateWebToken, Login);

module.exports = app;
