const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  userId: String,
  address: String
});

module.exports = mongoose.model('addresses', addressSchema);