// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require('mongoose');
const Connection = require('./connection');

const Schema = mongoose.Schema;

const stationSchema = new Schema({
  Connections: [{type: mongoose.Types.ObjectId, ref: 'Connection'}],
  Title: String,
  AddressLine1: String,
  Town: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      // index: { type: '2dsphere', sparse: false },
    },
  },
});

module.exports = mongoose.model('Station', stationSchema);
