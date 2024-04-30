// components/AppointmentBooking.js

import React, { useState } from 'react';
import axios from "axios"

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    doctorId: '',
    disease: '',
    date: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/patients/book-appointment", formData)
    console.log(res);
    if(res.status === 200){
      setFormData({
        patientId: '',
        doctorId: '',
        disease: '',
        date: '',
        // Add more fields as needed
      })
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Appointment Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Patient ID:</label>
          <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Doctor ID:</label>
          <input type="text" name="doctorId" value={formData.doctorId} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Disease:</label>
          <input type="text" name="disease" value={formData.disease} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        {/* Add more input fields for other appointment details */}
        <div>
          <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentBooking;
