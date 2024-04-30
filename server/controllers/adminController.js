// Import Patient model
const Patient = require("../models/patientModel");
const Doctor = require("../models/doctorModel");
const Nurse = require("../models/nurseModel");
const Appointment = require("../models/appointmentModel")
const Payment = require("../models/paymentModel")
// Define controller functions
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    if (!patients || patients.length === 0) {
      return res.status(404).json({ message: "No patients found" });
    }

    res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    if (!doctors || doctors.length === 0) {
      return res.status(404).json({ message: "No doctors found" });
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllNurses = async (req, res) => {
  try {
    const nurses = await Nurse.find()
      .populate('doctor', 'name')

    if (!nurses || nurses.length === 0) {
      return res.status(404).json({ message: "No nurses found" });
    }

    res.status(200).json(nurses);
  } catch (error) {
    console.error("Error fetching Nurses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('doctor', 'name')
      .populate('patient', 'name');

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "No appointments found" });
    }

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching Appointments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('patient', 'name');

    if (!payments || payments.length === 0) {
      return res.status(404).json({ message: "No payments found" });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching Appointments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    // await doctor.remove();
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


exports.deleteNurse = async (req, res) => {
  try {
    const nurse = await Nurse.findByIdAndDelete(req.params.id);
    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }
    // await nurse.remove();
    res.status(200).json({ message: "Nurse deleted successfully" });
  } catch (error) {
    console.error("Error deleting nurse:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    // await patient.remove();
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    // await appointment.remove();
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}