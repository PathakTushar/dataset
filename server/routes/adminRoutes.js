const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Define routes for admin
router.get('/patients', adminController.getAllPatients);
router.delete('/patients/:id', adminController.deletePatient);

router.get('/doctors', adminController.getAllDoctors);
router.delete('/doctors/:id', adminController.deleteDoctor);

router.get('/nurses', adminController.getAllNurses);
router.delete('/nurses/:id', adminController.deleteNurse);

router.get('/appointments', adminController.getAllAppointments);
router.delete('/appointments/:id', adminController.deleteAppointment);

router.get('/payments', adminController.getAllPayments);


module.exports = router;
