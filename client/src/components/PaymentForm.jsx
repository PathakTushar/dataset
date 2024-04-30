// components/PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    amount: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/patients/pay-fees', formData);
      if(response.status === 200){
        setFormData({
            patientId: '',
            amount: '',
        });
      }
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
      {error && <div className="text-red-600">{error}</div>}
      {successMessage && <div className="text-green-600">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Patient ID:</label>
          <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Make Payment</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
