const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'CropCategory' },
  logo: String,
  cover: String
});

// OverwriteModelError se bachne ke liye
module.exports = mongoose.models.Crop || mongoose.model('Crop', cropSchema);
