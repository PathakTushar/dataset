const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Define routes for patients
router.post('/book-appointment', patientController.bookAppointment);
router.post('/pay-fees', patientController.payFees);
router.post('/register', patientController.register);

module.exports = router;
