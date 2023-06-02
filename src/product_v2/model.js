const db = require('../config/mongoose');
require('dotenv').config();
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field cannot be empty'],
    minlength: 3,
    maxlength: 50,
  },
  stock: Number,
  price: {
    type: Number,
    required: true,
    min: 100,
    max: 999999999,
  },

  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model(process.env.MONGOOSE_MODEL, productSchema);
module.exports = Product;
