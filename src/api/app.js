const express = require('express');

const { ValidateNewUser } = require('../middlewares');
const { UserRoute } = require('../routes');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (_request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', ValidateNewUser, UserRoute);

module.exports = app;
