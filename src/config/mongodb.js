require('dotenv').config();
const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
(async () => {
  try {
    await client.connect();
    console.log('Successfully connected!');
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db(process.env.DB);

module.exports = db;
