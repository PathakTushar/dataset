import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PatientRegistration from "./PatientRegistration";
import DoctorRegistration from "./DoctorRegistration";
import NurseRegistration from "./NurseRegistration";
import AppointmentBooking from "./AppointmentBooking";
import AdminPanel from "./AdminPanel";
import PaymentForm from "./PaymentForm";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patientregistration" element={<PatientRegistration />} />
      <Route path="/doctorregistration" element={<DoctorRegistration />} />
      <Route path="/nurseregistration" element={<NurseRegistration />} />
      <Route path="/appointmentbooking" element={<AppointmentBooking />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/pay-fees" element={<PaymentForm />} />
    </Routes>
  );
};

export default Navigation;
