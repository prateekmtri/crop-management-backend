// backend/routes/cropTimelineRoutes.js
const express = require('express');
const router = express.Router();
const {
  createCropTimeline,
  getAllCropTimelines,
  deleteCropTimeline
} = require('../controllers/timelinecontroller');

// Create a new crop timeline
router.post('/crop-timelines', createCropTimeline);

// Get all crop timelines
router.get('/crop-timelines', getAllCropTimelines);

// Delete a crop timeline
router.delete('/crop-timelines/:id', deleteCropTimeline);

module.exports = router;