const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nurseSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
});

const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
