// Aqui coloquei a conexão ao banco e os Schemas do mongoose, já que serão só 2.

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const { DB_NAME, PORT, HOST } = process.env;

const MONGO_DB_URL = `mongodb://${HOST || 'mongodb'}:${PORT}/${DB_NAME}`;

mongoose.connect(MONGO_DB_URL)
  .then(() => console.log('Conectado ao MONGODB'))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  preparation: String,
  userId: String,
  image: String,
});

const User = mongoose.model('users', UserSchema);
const Recipe = mongoose.model('recipes', RecipeSchema);

module.exports = {
  User,
  Recipe,
};