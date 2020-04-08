const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  ConnectionTypeID : {type: mongoose.Types.ObjectId, ref: 'ConnectionType'},
  LevelID: {type: mongoose.Types.ObjectId, ref: 'Level'},
  CurrentTypeID : {type: mongoose.Types.ObjectId, ref: 'CurrentType'},
  Quantity : Number,
});

module.exports = mongoose.model('Connection', connectionSchema);
