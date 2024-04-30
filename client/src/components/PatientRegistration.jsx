// components/PatientRegistration.js

import React, { useState } from "react";
import axios from "axios"

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/patients/register", formData)
    if(res.status === 200){
      setFormData({
        name: "",
        age: "",
        address: "",
        // Add more fields as needed
      });
    }
    console.log(res);
    // console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Patient Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
        {/* Add more input fields for other patient information */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistration;
