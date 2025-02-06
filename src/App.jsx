// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProtectedAuth from "./ui/ProtectedAuth";

import AuthenticationLayout from "./ui/AuthenticationLayout";
// import Loader from "./ui/Loader";
import PageNotFound from "./ui/PageNotFound";
import Home from "./ui/Home";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
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
import DoctorsList from "./features/dashboard/patient/DoctorList";

import CompleteDoctorProfile from "./features/dashboard/doctor/CompleteDoctorProfile";
import CompleteClinicProfile from "./features/dashboard/clinic/CompleteClinicProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // setTimeout(() => setIsLoading(false), 2000);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Authentication */}
            <Route element={<AuthenticationLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="reset-password"
                element={
                  <ProtectedAuth>
                    <ResetPassword />
                  </ProtectedAuth>
                }
              />
            </Route>

            {/* Clinic */}
            <Route
              path="clinic/complete-profile"
              element={
                <ProtectedRoute>
                  <CompleteClinicProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="clinic"
              element={
                <ProtectedRoute>
                  <ClinicLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<ClinicDashboard />} />
              {/* Doctors */}
              <Route path="doctor-list" element={<DoctorList />} />
              <Route path="add-doctor" element={<AddDoctor />} />
              {/* Patients */}
              <Route path="patients-list" element={<PatientsList />} />
              <Route path="add-patients" element={<AddPatients />} />
              <Route path="payments" element={<Payments />} />
              {/* Staff */}
              <Route path="employee-salary" element={<EmployeeSalary />} />
              <Route path="add-staff" element={<AddStaff />} />
              <Route path="attendance" element={<Attendance />} />
              {/* Appointments */}
              <Route path="appointment-list" element={<AppointmentList />} />
              <Route path="book-appointment" element={<BookAppointment />} />
              <Route path="edit-appointment" element={<EditAppointments />} />
              {/* Doctor Schedule */}
              <Route path="schedule-list" element={<ScheduleList />} />
              <Route path="add-schedule" element={<AddSchedule />} />
              <Route path="edit-schedule" element={<EditSchedule />} />

              <Route path="chat" element={<Chat />} />
              <Route path="reports" element={<Reports />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="edit-profile" />
              <Route path="my-profile" />
            </Route>

            {/* Doctor */}
            <Route
              path="doctor/complete-profile"
              element={<CompleteDoctorProfile />}
            />
            <Route
              path="doctor"
              element={
                <ProtectedRoute>
                  <DoctorLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<DoctorDashboard />} />
              <Route path="patients" element={<DoctorPatientsList />} />
              <Route path="chat" element={<DoctorChat />} />
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>

            {/* Patient */}
            <Route
              path="patient"
              element={
                <ProtectedRoute>
                  <PatientLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<PatientDashboard />} />
              <Route path="clinics" element={<ClinicsList />} />
              <Route path="chat" element={<PatientChat />} />
              <Route path="appointments" element={<PatientAppointments />} />
              <Route path="edit-profile" element={<EditProfilePatient />} />
              <Route path="doctors-list" element={<DoctorsList />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#333448",
            },
          }}
        />
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
