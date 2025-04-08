const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addCategory, getCategories, updateCategoryStatus, deleteCategory } = require('../controllers/cropcategeroycontrollers');

router.post('/', upload.single('logo'), addCategory);
router.get('/', getCategories);
router.patch('/:id', updateCategoryStatus);
router.delete('/:id', deleteCategory);

module.exports = router;