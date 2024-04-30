// components/Home.js

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Hospital Portal</h1>
          <nav className="space-x-4">
            <Link
              to="/patientregistration"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Patient Registration
            </Link>
            <Link
              to="/doctorregistration"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Doctor Registration
            </Link>
            <Link
              to="/nurseregistration"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Nurse Registration
            </Link>
            <Link
              to="/appointmentbooking"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Appointment Booking
            </Link>
            <Link
              to="/admin"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Admin Panel
            </Link>
            <Link
              to="/pay-fees"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Pay Fees
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Hospital Portal</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dolor eget sapien vestibulum, vel tincidunt justo tincidunt. Integer non nulla quis lacus tempus sodales nec at neque.
        </p>
      </div>
    </div>
  );
};

export default Home;
