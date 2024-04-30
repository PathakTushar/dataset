// components/DoctorRegistration.js

import React, { useState } from 'react';
import axios from "axios"

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const res = await axios.post("http://localhost:8000/doctors/register", formData)
    if(res.status === 200){
      setFormData({
        name: '',
        email: '',
        password: '',
        specialization: '',
        // Add more fields as needed
      });
    }
    console.log(res);
    // console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Doctor Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <label className="block mb-1">Specialization:</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required className="w-full border rounded-md px-4 py-2" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Register</button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegistration;
