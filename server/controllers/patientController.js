const Patient = require("../models/patientModel");

const Appointment = require("../models/appointmentModel");

const Payment = require("../models/paymentModel");
const Doctor = require("../models/doctorModel");

exports.bookAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date, disease } = req.body;

    const patient = await Patient.findById(patientId);
    const doctor = await Doctor.findById(doctorId);
    if (!patient || !doctor) {
      return res.status(404).json({ message: "Patient or doctor not found" });
    }
    const newAppointment = new Appointment({
      date,
      doctor: doctorId,
      patient: patientId,
      disease
    });

    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Error booking appointment:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.payFees = async (req, res) => {
  try {
    const { patientId, amount } = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newPayment = new Payment({
      amount,
      patient: patientId,
    });

    // Save the payment
    await newPayment.save();

    // Update patient's paymentStatus to 'paid'
    patient.paymentStatus = 'paid';
    await patient.save();

    res.status(201).json({ message: "Payment successful" });
  } catch (error) {
    console.error("Error paying fees:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.register = async (req, res) => {
  try {
    const { name, age, address } = req.body;


    const newPatient = new Patient({
      name,
      age,
      address,
    });

    await newPatient.save();

    res.status(200).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    console.error('Error registering patient:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};