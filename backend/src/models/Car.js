const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  mileage: { type: Number, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  status: { type: String, enum: ['available', 'sold'], required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);