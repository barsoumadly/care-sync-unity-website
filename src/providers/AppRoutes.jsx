import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../ui/ProtectedRoute";
import ProtectedAuth from "../ui/ProtectedAuth";

import AuthenticationLayout from "../ui/AuthenticationLayout";
// import Loader from "../ui/Loader";
import PageNotFound from "../ui/PageNotFound";
import Home from "../ui/Home";

import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedCompleteProfile from "../ui/ProtectedCompleteProfile";
/* Clinic */
import ClinicLayout from "../features/dashboard/clinic/ClinicLayout";
import ClinicDashboard from "../features/dashboard/clinic/ClinicDashboard";
import DoctorList from "../features/dashboard/clinic/Doctors/DoctorList";
import AddDoctor from "../features/dashboard/clinic/Doctors/AddDoctor";
import DoctorProfile from "../features/dashboard/clinic/Doctors/DoctorProfile";
import EditProfileDoc from "../features/dashboard/clinic/Doctors/EditProfileDoc";
import PatientsOfDoc from "../features/dashboard/clinic/Appointments/PatientsOfDoc";
import EmployeeSalary from "../features/dashboard/clinic/Staff/EmployeeSalary";
import AddStaff from "../features/dashboard/clinic/Staff/AddStaff";
import Attendance from "../features/dashboard/clinic/Staff/Attendance";
import AppointmentList from "../features/dashboard/clinic/Appointments/AppointmentList";
import BookAppointment from "../features/dashboard/clinic/Appointments/BookAppointment";
import EditAppointments from "../features/dashboard/clinic/Appointments/EditAppointments";
import ScheduleList from "../features/dashboard/clinic/DoctorSchedule/ScheduleList";
import AddSchedule from "../features/dashboard/clinic/DoctorSchedule/AddSchedule";
import EditSchedule from "../features/dashboard/clinic/DoctorSchedule/EditSchedule";
import EditProfileClinic from "../features/dashboard/clinic/EditProfileClinic";
import Chat from "../features/dashboard/chat/Chat";
import Reports from "../features/dashboard/clinic/Reports";
import Invoice from "../features/dashboard/clinic/Invoice";
/* Doctor */
import DoctorLayout from "../features/dashboard/doctor/DoctorLayout";
import DoctorDashboard from "../features/dashboard/doctor/DoctorDashboard";
import DoctorShedule from "../features/dashboard/doctor/DoctorShedule";
import DoctorPatientsList from "../features/dashboard/doctor/Patients/PatientList/Patients";
import DoctorChat from "../features/dashboard/chat/Chat";
import MyProfile from "../features/dashboard/doctor/MyProfile";
import EditProfile from "../features/dashboard/doctor/edit-profile/EditProfile";
import PatientProfile from "../features/dashboard/doctor/Patients/Examination/PatientProfile";
import ClinicsListOfDoctor from "../features/dashboard/doctor/Patients/ClinicList/ClinicsListOfDoctor";
/* Patient */
import PatientLayout from "../features/dashboard/patient/PatientLayout";
import PatientDashboard from "../features/dashboard/patient/PatientDashboard";
import ClinicsList from "../features/dashboard/patient/clinics/ClinicsList";
import PatientAppointments from "../features/dashboard/patient/appointments/Appointments";
import PatientChat from "../features/dashboard/chat/Chat";
import EditProfilePatient from "../features/dashboard/patient/EditProfile";
import PaymentGateway from "../features/dashboard/patient/PaymentGateway";
import DoctorsList from "../features/dashboard/patient/clinics/DoctorList";

import CompleteDoctorProfile from "../features/dashboard/doctor/complete-profile/CompleteDoctorProfile";
import CompleteClinicProfile from "../features/dashboard/clinic/Complete-Profile/CompleteClinicProfile";
import ClinicProfile from "../features/dashboard/patient/clinics/ClinicProfile";
import ClinicImages from "../features/dashboard/patient/clinics/ClinicImages";
import VerifyEmail from "../pages/VerifyEmail";
import ServerDown from "../ui/ServerDown";
import LaboratoryList from "../features/dashboard/patient/laboratories/LaboratoryList";
import PharmacyList from "../features/dashboard/patient/pharmacies/PharmacyList";
import PharmacyProfile from "../features/dashboard/patient/pharmacies/PharmacyProfile";
import LaboratoryProfile from "../features/dashboard/patient/laboratories/LaboratoryProfile";
import LaboratoryAnalysisList from "../features/dashboard/patient/laboratories/LaboratoryAnalyisList";
import PrescriptionsList from "../features/dashboard/patient/prescription/PrescriptionsList";
import PrescriptionPaper from "../features/dashboard/patient/prescription/PrescriptionPaper";
import MedicinesList from "../features/dashboard/patient/pharmacies/MedicinesList";
import MedicineList from "../features/dashboard/patient/medicines/MedicinesList";
import { useEffect } from "react";
import { logoutAllTabs } from "../services/auth";
import PatientProfileView from "../features/dashboard/patient/profile/PatientProfileView";
import PharmacyLayout from "../features/dashboard/pharmacy/PharmacyLayout";
import PharmacyDashboard from "../features/dashboard/pharmacy/PharmacyDashboard";
import LaboratoryLayout from "../features/dashboard/laboratory/LaboratoryLayout";
import LaboratoryDashboard from "../features/dashboard/laboratory/LaboratoryDashboard";
import PharmacyMedicinesList from "../features/dashboard/pharmacy/medicines/PharmacyMedicinesList";
import EditMedicineTuple from "../features/dashboard/pharmacy/medicines/EditMedicineTuple";
import MedicineAddition from "../features/dashboard/pharmacy/medicines/MedicineAddition";
import PharmacyProfileView from "../features/dashboard/pharmacy/profile/PharmacyProfileView";
import PharmacyEditProfile from "../features/dashboard/pharmacy/profile/PharmacyEditProfile";
import PatientEditProfile from "../features/dashboard/patient/profile/PatientEditProfile";
import CompletePatientProfile from "../features/dashboard/patient/profile/CompletePatientProfile";
import PharmacyCompleteProfile from "../features/dashboard/pharmacy/profile/PharmacyCompleteProfile";
import LaboratoryCompleteProfile from "../features/dashboard/laboratory/profile/LaboratoryCompleteProfile";
import LaboratoryEditProfile from "../features/dashboard/laboratory/profile/LaboratoryEditProfile";
import LaboratoryViewProfile from "../features/dashboard/laboratory/profile/LaboratoryViewProfile";
import AnalysisList from "../features/dashboard/laboratory/analysis/AnalysisList";
import AnalysisAddition from "../features/dashboard/laboratory/analysis/AnalysisAddition";
import EditAnalysisTuple from "../features/dashboard/laboratory/analysis/EditAnalysisTuple";
import OrdersList from "../features/dashboard/patient/medicines/OrdersList";
import PharmacyOrdersList from "../features/dashboard/pharmacy/orders/PharmacyOrdersList";
import MedicinesOrderList from "../features/dashboard/pharmacy/orders/MedicinesOrderList";
import OrderPaper from "../features/dashboard/patient/pharmacies/OrderPaper";

function AppRoutes() {
  return (
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
          path="/clinic/complete-profile"
          element={
            <ProtectedCompleteProfile>
              <CompleteClinicProfile />
            </ProtectedCompleteProfile>
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

          <Route path="doctor-profile" element={<DoctorProfile />} />
          <Route path="edit-profile-Doc" element={<EditProfileDoc />} />

          {/* Staff */}
          <Route path="employee-salary" element={<EmployeeSalary />} />
          <Route path="add-staff" element={<AddStaff />} />
          <Route path="attendance" element={<Attendance />} />
          {/* Appointments */}
          <Route path="appointment-list" element={<AppointmentList />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="patient-of-doctors" element={<PatientsOfDoc />} />
          <Route path="edit-appointment" element={<EditAppointments />} />
          {/* Doctor Schedule */}
          {/* <Route path="schedule-list" element={<ScheduleList />} />
          <Route path="add-schedule" element={<AddSchedule />} />
          <Route path="edit-schedule" element={<EditSchedule />} /> */}

          <Route path="edit-profile" element={<EditProfileClinic />} />
          <Route path="chat" element={<Chat />} />
          <Route path="reports" element={<Reports />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="edit-profile" />
          <Route path="my-profile" />
        </Route>

        {/* Doctor */}
        <Route
          path="doctor/complete-profile"
          element={
            <ProtectedCompleteProfile>
              <CompleteDoctorProfile />
            </ProtectedCompleteProfile>
          }
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
          <Route path="doctor-shedule" element={<DoctorShedule />} />
          <Route path="patients" element={<ClinicsListOfDoctor />} />
          <Route path="patient-list" element={<DoctorPatientsList />} />
          <Route
            path="patient-profile/:patientId"
            element={<PatientProfile />}
          />
          <Route path="chat" element={<DoctorChat />} />
          <Route path="view-profile" element={<MyProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>

        {/* Patient */}
        <Route
          path="patient/complete-profile"
          element={
            <ProtectedCompleteProfile>
              <CompletePatientProfile />
            </ProtectedCompleteProfile>
          }
        />

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
          <Route path="view-profile" element={<PatientProfileView />} />
          <Route path="edit-profile" element={<PatientEditProfile />} />
          <Route path="clinics/:clinicName" element={<ClinicProfile />} />
          <Route path="clinics/:clinicName/doctors" element={<DoctorsList />} />
          <Route path="clinics/:clinicName/images" element={<ClinicImages />} />
          <Route path="payment-gateway" element={<PaymentGateway />} />
          <Route path="pharmacies" element={<PharmacyList />} />
          <Route
            path="pharmacies/:pharmacyName/:id"
            element={<PharmacyProfile />}
          />
          <Route
            path="pharmacies/:pharmacyName/:id/medicines"
            element={<MedicinesList />}
          />
          <Route path="check-order" element={<OrderPaper />} />
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
          <Route path="medicine-orders" element={<OrdersList />} />
          <Route path="medicine-orders/:id" element={<MedicineList />} />
        </Route>

        {/* Pharmacy */}
        <Route
          path="pharmacy/complete-profile"
          element={
            <ProtectedCompleteProfile>
              <PharmacyCompleteProfile />
            </ProtectedCompleteProfile>
          }
        />
        <Route
          path="pharmacy"
          element={
            <ProtectedRoute>
              <PharmacyLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<PharmacyDashboard />} />
          <Route path="medicines" element={<PharmacyMedicinesList />} />
          <Route
            path="edit-medicine/:medicineId"
            element={<EditMedicineTuple />}
          />
          <Route path="add-medicine" element={<MedicineAddition />} />
          <Route path="medicine-orders" element={<PharmacyOrdersList />} />
          <Route path="medicine-orders/:id" element={<MedicinesOrderList />} />
          <Route path="view-profile" element={<PharmacyProfileView />} />
          <Route path="edit-profile" element={<PharmacyEditProfile />} />
        </Route>

        {/* Laboratory */}
        <Route
          path="laboratory/complete-profile"
          element={
            <ProtectedCompleteProfile>
              <LaboratoryCompleteProfile />
            </ProtectedCompleteProfile>
          }
        />
        <Route
          path="laboratory"
          element={
            <ProtectedRoute>
              <LaboratoryLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<LaboratoryDashboard />} />
          <Route path="view-profile" element={<LaboratoryViewProfile />} />
          <Route path="edit-profile" element={<LaboratoryEditProfile />} />
          <Route path="analysis-list" element={<AnalysisList />} />
          <Route path="add-analysis" element={<AnalysisAddition />} />
          <Route
            path="edit-analysis/:analysisId"
            element={<EditAnalysisTuple />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/internal-server-error" element={<ServerDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
