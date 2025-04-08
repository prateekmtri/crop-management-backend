// routes/protection.routes.js
const express = require('express');
const router = express.Router();
const protectionController = require('../controllers/protectioncontrollers');

router.get('/protections', protectionController.getProtections);
router.post('/protections', protectionController.addProtection);
router.put('/protections/:id', protectionController.updateProtectionStatus);
router.delete('/protections/:id', protectionController.deleteProtection);

module.exports = router;