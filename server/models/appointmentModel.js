const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  disease: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
