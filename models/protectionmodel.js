// models/protection.model.js
const mongoose = require('mongoose');

const protectionSchema = new mongoose.Schema({
  cropId: { type: String, required: true }, // Assuming cropId comes from the frontend
  diseaseName: { type: String, required: true },
  description: { type: String, required: true },
  videoLink: { type: String },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model('Protection', protectionSchema);