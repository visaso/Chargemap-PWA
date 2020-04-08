const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelSchema = new Schema({
  Comments: String,
  IsFastChargeCapable: Boolean,
  Title: String,
});

module.exports = mongoose.model('Level', levelSchema);
