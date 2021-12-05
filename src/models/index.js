// Aqui coloquei a conexão ao banco e os Schemas do mongoose, já que serão só 2.

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;

mongoose.connect(MONGO_DB_URL)
  .then(() => console.log('Conectado ao MONGODB'))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model('users', UserSchema);

module.exports = {
  User,
};