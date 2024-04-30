const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  medicalHistory: { type: String },
  appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  nurse: { type: Schema.Types.ObjectId, ref: 'Nurse' },
  paymentStatus: { type: String, enum: ['paid', 'pending'], default: 'pending' },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
