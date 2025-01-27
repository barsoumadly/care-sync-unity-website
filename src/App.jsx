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
import Dashboard from "./features/dashboard/clinic/Dashboard";
import Doctors from "./features/dashboard/clinic/Doctors";
import Patients from "./features/dashboard/clinic/Patients";
import Staff from "./features/dashboard/clinic/Staff";
import Appointments from "./features/dashboard/clinic/Appointments";
import DoctorSchedule from "./features/dashboard/clinic/DoctorSchedule";
import Chat from "./features/dashboard/clinic/Chat";
import Reports from "./features/dashboard/clinic/Reports";
import Invoice from "./features/dashboard/clinic/Invoice";

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
      { path: "/clinic/dashboard", element: <Dashboard /> },
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
  // { path: "/patient", element: <Patient /> },
  // { path: "/doctor", element: <Doctor /> },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);
  return <>{isLoading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
