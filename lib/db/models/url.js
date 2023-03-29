const { Schema, model } = require('mongoose');

const urlSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = model('Url', urlSchema);