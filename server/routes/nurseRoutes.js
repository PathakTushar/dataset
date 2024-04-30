const express = require('express');
const router = express.Router();
const nurseController = require('../controllers/nurseController');

// Define routes for nurses
router.get('/:nurseId', nurseController.getPatients);
router.post('/register', nurseController.register);

module.exports = router;
