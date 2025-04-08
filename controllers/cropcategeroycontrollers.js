const CropCategory = require('../models/cropcategeory');

// Add new category
exports.addCategory = async (req, res) => {
  const { name } = req.body;
  const logo = req.file ? req.file.path : '';
  const category = new CropCategory({ name, logo });
  await category.save();
  res.status(201).json(category);
};

// Get all categories
exports.getCategories = async (req, res) => {
  const categories = await CropCategory.find();
  res.json(categories);
};

// Update category status
exports.updateCategoryStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const category = await CropCategory.findByIdAndUpdate(id, { status }, { new: true });
  res.json(category);
};

// Delete category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  await CropCategory.findByIdAndDelete(id);
  res.status(204).send();
};