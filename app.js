// backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const upload = require('./middleware/upload');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const cropCategoryRoutes = require('./routes/cropcategoryroutes');
const cropListRoutes = require('./routes/croplistroutes');
const cropTimelineRoutes = require('./routes/timelineroutes');
const protectionRoutes = require('./routes/protectionroutes'); // Added protection routes

app.use('/api/crop-categories', cropCategoryRoutes);
app.use('/api/crops', cropListRoutes);
app.use('/api', cropTimelineRoutes);
app.use('/api', protectionRoutes); // Added protection routes

app.get('/', (req, res) => {
  res.send('Farm App Backend chal raha hai!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} pe chal raha hai!`);
});