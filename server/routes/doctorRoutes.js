const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Define routes for doctor
router.post('/register', doctorController.register);
router.get('/:doctorId', doctorController.getPatients);

module.exports = router;
