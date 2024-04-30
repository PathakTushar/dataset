// components/AdminPanel.js

import React, { useState, useEffect } from 'react';
import axios from "axios"

const AdminPanel = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/doctors");
        setDoctors(res.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    const fetchPatients = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/patients");
        setPatients(res.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/appointments");
        setAppointments(res.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    const fetchNurses = async () => {
        try {
          const res = await axios.get("http://localhost:8000/admin/nurses");
          setNurses(res.data);
        } catch (err) {
          setError(err.response.data.message);
        }
    };
    const fetchPayments = async () => {
        try {
          const res = await axios.get("http://localhost:8000/admin/payments");
          setPayments(res.data);
        } catch (err) {
          setError(err.response.data.message);
        }
    };
    fetchDoctors();
    fetchPatients();
    fetchAppointments();
    fetchNurses();
    fetchPayments();
  }, []);

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`http://localhost:8000/admin/doctors/${doctorId}`);
      setDoctors(doctors.filter(doctor => doctor._id !== doctorId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDeletePatient = async (patientId) => {
    try {
      await axios.delete(`http://localhost:8000/admin/patients/${patientId}`);
      setPatients(patients.filter(patient => patient._id !== patientId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDeleteNurse = async (nurseId) => {
    try {
      await axios.delete(`http://localhost:8000/admin/nurses/${nurseId}`);
      setNurses(nurses.filter(nurse => nurse._id !== nurseId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8000/admin/appointments/${appointmentId}`);
      setAppointments(appointments.filter(appointment => appointment._id !== appointmentId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

//   if (doctors.length === 0 || patients.length === 0 || appointments.length === 0 || ) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="max-w-4xl mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      <div>
        <h2 className="text-2xl font-bold mb-4">Doctor Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Doctor</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.specialization}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleDeleteDoctor(doctor._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Patient</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.paymentStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleDeletePatient(patient._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Nurse Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docotor</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Nurse</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {nurses.map((nurse, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{nurse.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{nurse.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{nurse.doctor.name}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap">{nurse.paymentStatus}</td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleDeleteNurse(nurse._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Appointments</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.doctor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.disease}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleDeleteAppointment(appointment._id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.patient.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
