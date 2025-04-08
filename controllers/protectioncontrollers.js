// controllers/protection.controller.js
const Protection = require('../models/protectionmodel');

exports.getProtections = async (req, res) => {
  try {
    const protections = await Protection.find();
    res.status(200).json({ data: protections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProtection = async (req, res) => {
  const { cropId, diseaseName, description, videoLink } = req.body;
  try {
    const protection = new Protection({
      cropId,
      diseaseName,
      description,
      videoLink,
    });
    await protection.save();
    res.status(201).json({ message: 'Protection added successfully', data: protection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProtectionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const protection = await Protection.findByIdAndUpdate(id, { status }, { new: true });
    if (!protection) return res.status(404).json({ message: 'Protection not found' });
    res.status(200).json({ message: 'Status updated successfully', data: protection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProtection = async (req, res) => {
  const { id } = req.params;
  try {
    const protection = await Protection.findByIdAndDelete(id);
    if (!protection) return res.status(404).json({ message: 'Protection not found' });
    res.status(200).json({ message: 'Protection deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};