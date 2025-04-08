const Crop = require('../models/crop');

// Add new crop
exports.addCrop = async (req, res) => {
  const { name, category } = req.body;
  const logo = req.files.logo ? req.files.logo[0].path : '';
  const cover = req.files.cover ? req.files.cover[0].path : '';
  const crop = new Crop({ name, category, logo, cover });
  await crop.save();
  res.status(201).json(crop);
};

// Get all crops
exports.getCrops = async (req, res) => {
  const crops = await Crop.find().populate('category');
  res.json(crops);
};

// Update crop status
exports.updateCropStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const crop = await Crop.findByIdAndUpdate(id, { status }, { new: true }).populate('category');
  res.json(crop);
};

// Delete crop
exports.deleteCrop = async (req, res) => {
  const { id } = req.params;
  await Crop.findByIdAndDelete(id);
  res.status(204).send();
};