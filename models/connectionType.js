const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionTypeSchema = new Schema({
  FormalName : String,
  Title : String
});

module.exports = mongoose.model('ConnectionType', connectionTypeSchema);
