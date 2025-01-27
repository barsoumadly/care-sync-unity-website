import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthenticationLayout from "./ui/AuthenticationLayout";
import ForgotPassword from "./features/authentication/ForgotPassword";
import ResetPassword from "./features/authentication/ResetPassword";

import Loader from "./ui/Loader";
import Error from "./ui/Error";
import Home from "./ui/Home";

import Register from "./pages/Register";
import Login from "./pages/login";

import ClinicLayout from "./features/dashboard/clinic/ClinicLayout";
import ClinicDashboard from "./features/dashboard/clinic/ClinicDashboard";
import Doctors from "./features/dashboard/clinic/Doctors";
import Patients from "./features/dashboard/clinic/Patients";
import Staff from "./features/dashboard/clinic/Staff";
import Appointments from "./features/dashboard/clinic/Appointments";
import DoctorSchedule from "./features/dashboard/clinic/DoctorSchedule";
import Chat from "./features/dashboard/clinic/Chat";
import Reports from "./features/dashboard/clinic/Reports";
import Invoice from "./features/dashboard/clinic/Invoice";

import DoctorLayout from "./features/dashboard/doctor/DoctorLayout";
import DoctorDashboard from "./features/dashboard/doctor/DoctorDashboard";
import DoctorPatientsList from "./features/dashboard/doctor/Patients";
import DoctorChat from "./features/dashboard/doctor/Chat";
import MyProfile from "./features/dashboard/doctor/MyProfile";
import EditProfile from "./features/dashboard/doctor/EditProfile";

import PatientLayout from "./features/dashboard/patient/PatientLayout";
import PatientDashboard from "./features/dashboard/patient/PatientDashboard";
import ClinicsList from "./features/dashboard/patient/ClinicsList";
import PatientAppointments from "./features/dashboard/patient/Appointments";
import PatientChat from "./features/dashboard/patient/Chat";
import EditProfilePatient from "./features/dashboard/patient/EditProfile";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    element: <AuthenticationLayout />,
    errorElement: <Error />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    element: <ClinicLayout />,
    errorElement: <Error />,
    children: [
      { path: "/clinic/dashboard", element: <ClinicDashboard /> },
      /* Doctors */
      { path: "/clinic/doctor-list", element: <Doctors /> },
      { path: "/clinic/add-doctor", element: <Doctors /> },
      /* Patients */
      { path: "/clinic/patients-list", element: <Patients /> },
      { path: "/clinic/add-patients", element: <Patients /> },
      { path: "/clinic/payments", element: <Patients /> },
      /* Staff */
      { path: "/clinic/employee-salary", element: <Staff /> },
      { path: "/clinic/add-staff", element: <Staff /> },
      { path: "/clinic/attendance", element: <Staff /> },
      /* Appointments */
      { path: "/clinic/appointment-list", element: <Appointments /> },
      { path: "/clinic/book-appointment", element: <Appointments /> },
      { path: "/clinic/edit-appointment", element: <Appointments /> },
      /* Doctor Schedule */
      { path: "/clinic/schedule-list", element: <DoctorSchedule /> },
      { path: "/clinic/add-schedule", element: <DoctorSchedule /> },
      { path: "/clinic/edit-schedule", element: <DoctorSchedule /> },

      { path: "/clinic/chat", element: <Chat /> },
      { path: "/clinic/reports", element: <Reports /> },
      { path: "/clinic/invoice", element: <Invoice /> },
    ],
  },
  {
    element: <DoctorLayout />,
    errorElement: <Error />,
    children: [
      { path: "/doctor/dashboard", element: <DoctorDashboard /> },
      { path: "/doctor/patients", element: <DoctorPatientsList /> },
      { path: "/doctor/chat", element: <DoctorChat /> },
      { path: "/doctor/my-profile", element: <MyProfile /> },
      { path: "/doctor/edit-profile", element: <EditProfile /> },
    ],
  },

  {
    element: <PatientLayout />,
    errorElement: <Error />,
    children: [
      { path: "/patient/dashboard", element: <PatientDashboard /> },
      { path: "/patient/clinics", element: <ClinicsList /> },
      { path: "/patient/chat", element: <PatientChat /> },
      { path: "/patient/appointments", element: <PatientAppointments /> },
      { path: "/patient/edit-profile", element: <EditProfilePatient /> },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);
  return <>{isLoading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
