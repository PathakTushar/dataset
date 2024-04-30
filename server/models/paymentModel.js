const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
