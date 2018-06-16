let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let addressSchema = new Schema({
  userId: String,
  address: String
});