const mongoose = require('mongoose');

const cropCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model('CropCategory', cropCategorySchema);