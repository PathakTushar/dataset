const bcrypt = require("bcrypt");

const Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");


exports.register = async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDoctor = new Doctor({
      name,
      email,
      password: hashedPassword,
      specialization,
    });

    await newDoctor.save();

    res.status(200).json({ message: "Doctor registered successfully" });
  } catch (error) {
    console.error("Error registering doctor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;

    const appointments = await Appointment.find({ doctor: doctorId }).populate(
      "patient"
    );

    res
      .status(200)
      .json(appointments.map((appointment) => appointment.patient));
  } catch (error) {
    console.error("Error getting patients of doctor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
