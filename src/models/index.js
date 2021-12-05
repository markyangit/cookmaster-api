// Aqui coloquei a conexão ao banco e os Schemas do mongoose, já que serão só 2.

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;

async function main() {
  await mongoose.connect(MONGO_DB_URL);
}

main().catch((err) => console.log(err));