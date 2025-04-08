const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addCrop, getCrops, updateCropStatus, deleteCrop } = require('../controllers/croplistcontrollers');

router.post('/', upload.fields([{ name: 'logo' }, { name: 'cover' }]), addCrop);
router.get('/', getCrops);
router.patch('/:id', updateCropStatus);
router.delete('/:id', deleteCrop);

module.exports = router;