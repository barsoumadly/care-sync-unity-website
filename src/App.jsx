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
import DoctorShedule from "./features/dashboard/doctor/DoctorShedule";
import DoctorPatientsList from "./features/dashboard/doctor/Patients/Patients";
import DoctorChat from "./features/dashboard/doctor/Chat";
import MyProfile from "./features/dashboard/doctor/MyProfile";
import EditProfile from "./features/dashboard/doctor/EditProfile";
import PatientProfile from "./features/dashboard/doctor/Patients/PatientProfile";
import ClinicsListOfDoctor from "./features/dashboard/doctor/Patients/ClinicsListOfDoctor";
/* Patient */
import PatientLayout from "./features/dashboard/patient/PatientLayout";
import PatientDashboard from "./features/dashboard/patient/PatientDashboard";
import ClinicsList from "./features/dashboard/patient/clinics/ClinicsList";
import PatientAppointments from "./features/dashboard/patient/appointments/Appointments";
import PatientChat from "./features/dashboard/patient/Chat";
import EditProfilePatient from "./features/dashboard/patient/EditProfile";
import PaymentGateway from "./features/dashboard/patient/PaymentGateway";
import DoctorsList from "./features/dashboard/patient/clinics/DoctorList";

import CompleteDoctorProfile from "./features/dashboard/doctor/complete-profile/CompleteDoctorProfile";
import CompleteClinicProfile from "./features/dashboard/clinic/CompleteClinicProfile";
import ClinicProfile from "./features/dashboard/patient/clinics/ClinicProfile";
import ClinicImages from "./features/dashboard/patient/clinics/ClinicImages";
import VerifyEmail from "./pages/VerifyEmail";
import ServerDown from "./ui/ServerDown";
import LaboratoryList from "./features/dashboard/patient/laboratories/LaboratoryList";
import PharmacyList from "./features/dashboard/patient/pharmacies/PharmacyList";
import PharmacyProfile from "./features/dashboard/patient/pharmacies/PharmacyProfile";
import LaboratoryProfile from "./features/dashboard/patient/laboratories/LaboratoryProfile";
import LaboratoryAnalysisList from "./features/dashboard/patient/laboratories/LaboratoryAnalyisList";
import PrescriptionsList from "./features/dashboard/patient/prescription/PrescriptionsList";
import PrescriptionPaper from "./features/dashboard/patient/prescription/PrescriptionPaper";
import MedicinesList from "./features/dashboard/patient/pharmacies/MedicinesList";
import MedicineList from "./features/dashboard/patient/medicines/MedicinesList";
import { useEffect } from "react";
import { logoutAllTabs } from "./services/auth";
<<<<<<< HEAD
import PatientProfileView from "./features/dashboard/patient/profile/PatientProfileView";
import PharmacyLayout from "./features/dashboard/pharmacy/PharmacyLayout";
import PharmacyDashboard from "./features/dashboard/pharmacy/PharmacyDashboard";
import LaboratoryLayout from "./features/dashboard/laboratory/LaboratoryLayout";
import LaboratoryDashboard from "./features/dashboard/laboratory/LaboratoryDashboard";
import PharmacyMedicinesList from "./features/dashboard/pharmacy/medicines/PharmacyMedicinesList";
import EditMedicineTuple from "./features/dashboard/pharmacy/medicines/EditMedicineTuple";
import MedicineAddition from "./features/dashboard/pharmacy/medicines/MedicineAddition";
import PharmacyProfileView from "./features/dashboard/pharmacy/profile/PharmacyProfileView";
import PharmacyEditProfile from "./features/dashboard/pharmacy/profile/PharmacyEditProfile";
import PatientEditProfile from "./features/dashboard/patient/profile/PatientEditProfile";
import CompletePatientProfile from "./features/dashboard/patient/profile/CompletePatientProfile";
import PatientAddressDetails from "./features/dashboard/patient/profile/PatientAddressDetails";
import PatientHealthDetails from "./features/dashboard/patient/profile/PatientHealthDetails";
import PatientProfilePhoto from "./features/dashboard/patient/profile/PatientProfilePhoto";
import PharmacyCompleteProfile from "./features/dashboard/pharmacy/profile/PharmacyCompleteProfile";
import LaboratoryCompleteProfile from "./features/dashboard/laboratory/profile/LaboratoryCompleteProfile";
=======
import PatientsOfDoc from "./features/dashboard/clinic/PatientsOfDoc";
>>>>>>> origin/main

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  window.addEventListener(`contextmenu`, (e) => e.preventDefault());

  useEffect(() => {
    logoutAllTabs();
  }, []);

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
              <Route
                path="verify-email"
                element={
                  <ProtectedAuth>
                    <VerifyEmail />
                  </ProtectedAuth>
                }
              />
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
              }>
              <Route path="dashboard" element={<ClinicDashboard />} />
              {/* Doctors */}
              <Route path="doctor-list" element={<DoctorList />} />
              <Route path="add-doctor" element={<AddDoctor />} />
            
              {/* Staff */}
              <Route path="employee-salary" element={<EmployeeSalary />} />
              <Route path="add-staff" element={<AddStaff />} />
              <Route path="attendance" element={<Attendance />} />
              {/* Appointments */}
              <Route path="appointment-list" element={<AppointmentList />} />
              <Route path="patient-of-doctors" element={<PatientsOfDoc />} />
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
              }>
              <Route path="dashboard" element={<DoctorDashboard />} />
              <Route path="doctor-shedule" element={<DoctorShedule />} />
              <Route path="patients" element={<ClinicsListOfDoctor />} />
              <Route path="patient-list" element={<DoctorPatientsList />} />
              <Route path="patient-profile" element={<PatientProfile />} />
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
              }>
              <Route path="dashboard" element={<PatientDashboard />} />
              <Route path="clinics" element={<ClinicsList />} />
              <Route path="chat" element={<PatientChat />} />
              <Route path="appointments" element={<PatientAppointments />} />
              <Route path="view-profile" element={<EditProfilePatient />} />
              <Route path="clinics/:clinicName" element={<ClinicProfile />} />
              <Route
                path="clinics/:clinicName/doctors"
                element={<DoctorsList />}
              />
              <Route
                path="clinics/:clinicName/images"
                element={<ClinicImages />}
              />
              <Route path="payment-gateway" element={<PaymentGateway />} />
              <Route path="pharmacies" element={<PharmacyList />} />
              <Route
                path="pharmacies/:pharmacyName"
                element={<PharmacyProfile />}
              />
              <Route
                path="pharmacies/:pharmacyName/medicines"
                element={<MedicinesList />}
              />
              <Route path="laboratories" element={<LaboratoryList />} />
              <Route
                path="laboratories/:laboratoryName"
                element={<LaboratoryProfile />}
              />
              <Route
                path="laboratories/:laboratoryName/analysis-list"
                element={<LaboratoryAnalysisList />}
              />
              <Route path=":doctorName/profile" element={<MyProfile />} />
              <Route path="prescriptions" element={<PrescriptionsList />} />
              <Route path="prescription/:id" element={<PrescriptionPaper />} />
              <Route path="medicines" element={<MedicineList />} />
            </Route>
<<<<<<< HEAD

            {/* Pharmacy */}
            <Route
              path="pharmacy"
              element={
                <ProtectedRoute>
                  <PharmacyLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path="complete-profile"
                element={<PharmacyCompleteProfile />}
              />
              <Route path="dashboard" element={<PharmacyDashboard />} />
              <Route path="medicines" element={<PharmacyMedicinesList />} />
              <Route path="edit-medicine" element={<EditMedicineTuple />} />
              <Route path="add-medicine" element={<MedicineAddition />} />
              <Route path="view-profile" element={<PharmacyProfileView />} />
              <Route path="edit-profile" element={<PharmacyEditProfile />} />
            </Route>

            {/* Laboratory */}
            <Route
              path="laboratory"
              element={
                <ProtectedRoute>
                  <LaboratoryLayout />
                </ProtectedRoute>
              }
            >
              <Route
                path="complete-profile"
                element={<LaboratoryCompleteProfile />}
              />
              <Route path="dashboard" element={<LaboratoryDashboard />} />
            </Route>

=======
>>>>>>> origin/main
            <Route path="*" element={<PageNotFound />} />
            <Route path="/internal-server-error" element={<ServerDown />} />
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
