require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectionError'));
db.once('open', () => console.log('connectionSuccess'));
