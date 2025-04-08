const mongoose = require('mongoose');

const cropTimelineSchema = new mongoose.Schema({
  cropId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Crop', 
    required: true 
  },
  plantingDate: { 
    type: Date, 
    required: true 
  },
  description: {
    type: String,
    required: false
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('CropTimeline', cropTimelineSchema);
