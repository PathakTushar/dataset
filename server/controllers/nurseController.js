const bcrypt = require("bcrypt");

const Nurse = require("../models/nurseModel");
const Appointment = require("../models/appointmentModel");

const Patient = require("../models/patientModel");

const Doctor = require("../models/doctorModel");

exports.register = async (req, res) => {
  try {
    const { name, email, password, doctorId } = req.body;

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newNurse = new Nurse({
      name,
      email,
      password: hashedPassword,
      doctor: doctorId,
    });

   
    await newNurse.save();

    res
      .status(200)
      .json({ message: "Nurse registered successfully", nurse: newNurse });
  } catch (error) {
    console.error("Error registering nurse:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const nurseId = req.params.nurseId;

    const nurse = await Nurse.findById(nurseId);
    if (!nurse) {
      return res.status(404).json({ message: "Nurse not found" });
    }


    const patients = await Appointment.find({ doctor: nurse.doctor }).populate({
      path: 'patient',
      select: 'name',
    });
    

    console.log(patients);


    res.status(200).json(patients);
  } catch (error) {
    console.error("Error getting patients of nurse:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
