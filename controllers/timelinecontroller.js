const CropTimeline = require('../models/timelinemodel');

// Create Crop Timeline
const createCropTimeline = async (req, res) => {
  try {
    const { cropId, plantingDate, description } = req.body;

    if (!cropId || !plantingDate) {
      return res.status(400).json({ error: 'Crop ID and planting date are required' });
    }

    const timeline = new CropTimeline({
      cropId,
      plantingDate,
      description
    });

    await timeline.save();
    res.status(201).json(timeline);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Crop Timelines
const getAllCropTimelines = async (req, res) => {
  try {
    const timelines = await CropTimeline.find()
      .populate('cropId', 'name')
      .sort({ plantingDate: 1 });
    res.json(timelines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Crop Timeline
const deleteCropTimeline = async (req, res) => {
  try {
    await CropTimeline.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCropTimeline,
  getAllCropTimelines,
  deleteCropTimeline
};
