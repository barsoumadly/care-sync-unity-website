import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthenticationLayout from "./ui/AuthenticationLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Loader from "./ui/Loader";
import Error from "./ui/Error";
import Home from "./ui/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";
/* Clinic */
import ClinicLayout from "./features/dashboard/clinic/ClinicLayout";
import ClinicDashboard from "./features/dashboard/clinic/ClinicDashboard";
import DoctorList from "./features/dashboard/clinic/DoctorList";
import AddDoctor from "./features/dashboard/clinic/AddDoctor";
import PatientsList from "./features/dashboard/clinic/PatientsList";
import AddPatients from "./features/dashboard/clinic/AddPatients";
import Payments from "./features/dashboard/clinic/Payments";
import EmployeeSalary from "./features/dashboard/clinic/EmployeeSalary";
import AddStaff from "./features/dashboard/clinic/AddStaff";
import Attendance from "./features/dashboard/clinic/Attendance";
import AppointmentList from "./features/dashboard/clinic/AppointmentList";
import BookAppointment from "./features/dashboard/clinic/BookAppointment";
import EditAppointments from "./features/dashboard/clinic/EditAppointments";
import ScheduleList from "./features/dashboard/clinic/ScheduleList";
import AddSchedule from "./features/dashboard/clinic/AddSchedule";
import EditSchedule from "./features/dashboard/clinic/EditSchedule";
import Chat from "./features/dashboard/clinic/Chat";
import Reports from "./features/dashboard/clinic/Reports";
import Invoice from "./features/dashboard/clinic/Invoice";
/* Doctor */
import DoctorLayout from "./features/dashboard/doctor/DoctorLayout";
import DoctorDashboard from "./features/dashboard/doctor/DoctorDashboard";
import DoctorPatientsList from "./features/dashboard/doctor/Patients";
import DoctorChat from "./features/dashboard/doctor/Chat";
import MyProfile from "./features/dashboard/doctor/MyProfile";
import EditProfile from "./features/dashboard/doctor/EditProfile";
/* Patient */
import PatientLayout from "./features/dashboard/patient/PatientLayout";
import PatientDashboard from "./features/dashboard/patient/PatientDashboard";
import ClinicsList from "./features/dashboard/patient/ClinicsList";
import PatientAppointments from "./features/dashboard/patient/Appointments";
import PatientChat from "./features/dashboard/patient/Chat";
import EditProfilePatient from "./features/dashboard/patient/EditProfile";
import { UserContextProvider } from "./context/UserContextProvider";
import ProtectedRoute from "./ui/ProtectedRoute";

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
    element: (
      <ProtectedRoute>
        <ClinicLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      { path: "/clinic/dashboard", element: <ClinicDashboard /> },
      /* Doctors */
      { path: "/clinic/doctor-list", element: <DoctorList /> },
      { path: "/clinic/add-doctor", element: <AddDoctor /> },
      /* Patients */
      { path: "/clinic/patients-list", element: <PatientsList /> },
      { path: "/clinic/add-patients", element: <AddPatients /> },
      { path: "/clinic/payments", element: <Payments /> },
      /* Staff */
      { path: "/clinic/employee-salary", element: <EmployeeSalary /> },
      { path: "/clinic/add-staff", element: <AddStaff /> },
      { path: "/clinic/attendance", element: <Attendance /> },
      /* Appointments */
      { path: "/clinic/appointment-list", element: <AppointmentList /> },
      { path: "/clinic/book-appointment", element: <BookAppointment /> },
      { path: "/clinic/edit-appointment", element: <EditAppointments /> },
      /* Doctor Schedule */
      { path: "/clinic/schedule-list", element: <ScheduleList /> },
      { path: "/clinic/add-schedule", element: <AddSchedule /> },
      { path: "/clinic/edit-schedule", element: <EditSchedule /> },

      { path: "/clinic/chat", element: <Chat /> },
      { path: "/clinic/reports", element: <Reports /> },
      { path: "/clinic/invoice", element: <Invoice /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <DoctorLayout />
      </ProtectedRoute>
    ),
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
    element: (
      <ProtectedRoute>
        <PatientLayout />
      </ProtectedRoute>
    ),
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UserContextProvider>
        {isLoading ? <Loader /> : <RouterProvider router={router} />}
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
