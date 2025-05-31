import React, { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("../pages/Home"));
const ProtectedRoute = lazy(() => import("../ui/ProtectedRoute"));
const ProtectedAuth = lazy(() => import("../ui/ProtectedAuth"));
const PageNotFound = lazy(() => import("../ui/PageNotFound"));
const ServerDown = lazy(() => import("../ui/ServerDown"));
const AuthenticationLayout = lazy(() => import("../ui/AuthenticationLayout"));
const ProtectedCompleteProfile = lazy(() =>
  import("../ui/ProtectedCompleteProfile")
);
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const VerifyEmail = lazy(() => import("../pages/VerifyEmail"));

/* Clinic */
const ClinicLayout = lazy(() =>
  import("../features/dashboard/clinic/ClinicLayout")
);
const ClinicDashboard = lazy(() =>
  import("../features/dashboard/clinic/ClinicDashboard")
);
const DoctorList = lazy(() =>
  import("../features/dashboard/clinic/Doctors/DoctorList")
);
const AddDoctor = lazy(() =>
  import("../features/dashboard/clinic/Doctors/AddDoctor")
);
const EditProfileDoc = lazy(() =>
  import("../features/dashboard/clinic/Doctors/EditProfileDoc")
);
const PatientsOfDoc = lazy(() =>
  import("../features/dashboard/clinic/Appointments/PatientsOfDoc")
);
const EmployeeSalary = lazy(() =>
  import("../features/dashboard/clinic/Staff/EmployeeSalary")
);
const AddStaff = lazy(() =>
  import("../features/dashboard/clinic/Staff/AddStaff")
);
const Attendance = lazy(() =>
  import("../features/dashboard/clinic/Staff/Attendance")
);
const AppointmentList = lazy(() =>
  import("../features/dashboard/clinic/Appointments/AppointmentList")
);
const BookAppointment = lazy(() =>
  import("../features/dashboard/clinic/Appointments/BookAppointment")
);
const EditAppointments = lazy(() =>
  import("../features/dashboard/clinic/Appointments/EditAppointments")
);
const EditProfileClinic = lazy(() =>
  import("../features/dashboard/clinic/EditProfileClinic")
);
const Chat = lazy(() => import("../features/dashboard/chat/Chat"));
const Reports = lazy(() => import("../features/dashboard/clinic/Reports"));
const Invoice = lazy(() => import("../features/dashboard/clinic/Invoice"));
const CompleteClinicProfile = lazy(() =>
  import("../features/dashboard/clinic/Complete-Profile/CompleteClinicProfile")
);

/* Doctor */
const DoctorLayout = lazy(() =>
  import("../features/dashboard/doctor/DoctorLayout")
);
const DoctorDashboard = lazy(() =>
  import("../features/dashboard/doctor/dashboard/DoctorDashboard")
);
const DoctorShedule = lazy(() =>
  import("../features/dashboard/doctor/doctor-schedule/DoctorShedule")
);
const DoctorPatientsList = lazy(() =>
  import("../features/dashboard/doctor/Patients/PatientList/Patients")
);
const DoctorChat = lazy(() => import("../features/dashboard/chat/Chat"));
const MyProfile = lazy(() =>
  import("../features/dashboard/doctor/doctor-profile/MyProfile")
);
const EditProfile = lazy(() =>
  import("../features/dashboard/doctor/edit-profile/EditProfile")
);
const PatientProfile = lazy(() =>
  import("../features/dashboard/doctor/Patients/Examination/PatientProfile")
);
const ClinicsListOfDoctor = lazy(() =>
  import("../features/dashboard/doctor/Patients/ClinicList/ClinicsListOfDoctor")
);
const CompleteDoctorProfile = lazy(() =>
  import("../features/dashboard/doctor/complete-profile/CompleteDoctorProfile")
);

/* Patient */
const PatientLayout = lazy(() =>
  import("../features/dashboard/patient/PatientLayout")
);
const PatientDashboard = lazy(() =>
  import("../features/dashboard/patient/PatientDashboard")
);
const ClinicsList = lazy(() =>
  import("../features/dashboard/patient/clinics/ClinicsList")
);
const PatientAppointments = lazy(() =>
  import("../features/dashboard/patient/appointments/Appointments")
);
const PatientChat = lazy(() => import("../features/dashboard/chat/Chat"));
const PaymentGateway = lazy(() =>
  import("../features/dashboard/patient/PaymentGateway")
);
const DoctorsList = lazy(() =>
  import("../features/dashboard/patient/clinics/DoctorList")
);
const ClinicProfile = lazy(() =>
  import("../features/dashboard/patient/clinics/ClinicProfile")
);
const ClinicImages = lazy(() =>
  import("../features/dashboard/patient/clinics/ClinicImages")
);
const LaboratoryList = lazy(() =>
  import("../features/dashboard/patient/laboratories/LaboratoryList")
);
const PharmacyList = lazy(() =>
  import("../features/dashboard/patient/pharmacies/PharmacyList")
);
const PharmacyProfile = lazy(() =>
  import("../features/dashboard/patient/pharmacies/PharmacyProfile")
);
const LaboratoryProfile = lazy(() =>
  import("../features/dashboard/patient/laboratories/LaboratoryProfile")
);
const LaboratoryAnalysisList = lazy(() =>
  import("../features/dashboard/patient/laboratories/LaboratoryAnalyisList")
);
const PrescriptionsList = lazy(() =>
  import("../features/dashboard/patient/prescription/PrescriptionsList")
);
const PrescriptionPaper = lazy(() =>
  import("../features/dashboard/patient/prescription/PrescriptionPaper")
);
const MedicinesList = lazy(() =>
  import("../features/dashboard/patient/pharmacies/MedicinesList")
);
const PatientProfileView = lazy(() =>
  import("../features/dashboard/patient/profile/PatientProfileView")
);
const PatientEditProfile = lazy(() =>
  import("../features/dashboard/patient/profile/PatientEditProfile")
);
const CompletePatientProfile = lazy(() =>
  import("../features/dashboard/patient/profile/CompletePatientProfile")
);
/* pharmacy */
const PharmacyLayout = lazy(() =>
  import("../features/dashboard/pharmacy/PharmacyLayout")
);
const PharmacyDashboard = lazy(() =>
  import("../features/dashboard/pharmacy/PharmacyDashboard")
);
const PharmacyMedicinesList = lazy(() =>
  import("../features/dashboard/pharmacy/medicines/PharmacyMedicinesList")
);
const EditMedicineTuple = lazy(() =>
  import("../features/dashboard/pharmacy/medicines/EditMedicineTuple")
);
const MedicineAddition = lazy(() =>
  import("../features/dashboard/pharmacy/medicines/MedicineAddition")
);
const PharmacyProfileView = lazy(() =>
  import("../features/dashboard/pharmacy/profile/PharmacyProfileView")
);
const PharmacyEditProfile = lazy(() =>
  import("../features/dashboard/pharmacy/profile/PharmacyEditProfile")
);
const PharmacyCompleteProfile = lazy(() =>
  import("../features/dashboard/pharmacy/profile/PharmacyCompleteProfile")
);
/* laboratory */
const LaboratoryLayout = lazy(() =>
  import("../features/dashboard/laboratory/LaboratoryLayout")
);
const LaboratoryDashboard = lazy(() =>
  import("../features/dashboard/laboratory/LaboratoryDashboard")
);
const LaboratoryCompleteProfile = lazy(() =>
  import("../features/dashboard/laboratory/profile/LaboratoryCompleteProfile")
);
const LaboratoryEditProfile = lazy(() =>
  import("../features/dashboard/laboratory/profile/LaboratoryEditProfile")
);
const LaboratoryViewProfile = lazy(() =>
  import("../features/dashboard/laboratory/profile/LaboratoryViewProfile")
);
const AnalysisList = lazy(() =>
  import("../features/dashboard/laboratory/analysis/AnalysisList")
);
const AnalysisAddition = lazy(() =>
  import("../features/dashboard/laboratory/analysis/AnalysisAddition")
);
const EditAnalysisTuple = lazy(() =>
  import("../features/dashboard/laboratory/analysis/EditAnalysisTuple")
);
const OrdersList = lazy(() =>
  import("../features/dashboard/patient/medicines/OrdersList")
);
const PharmacyOrdersList = lazy(() =>
  import("../features/dashboard/pharmacy/orders/PharmacyOrdersList")
);
const OrderPaper = lazy(() =>
  import("../features/dashboard/patient/pharmacies/OrderPaper")
);
const AnalysisResults = lazy(() =>
  import("../features/dashboard/patient/analysis/AnalysisResults")
);
const LaboratoryOrderList = lazy(() =>
  import("../features/dashboard/laboratory/orders/LaboratoryOrderList")
);
const OrderAddition = lazy(() =>
  import("../features/dashboard/laboratory/orders/OrderAddition")
);
const ClinicProfileView = lazy(() =>
  import("../features/dashboard/clinic/ClinicProfile/ClinicProfileView")
);
const HospitalsList = lazy(() =>
  import("../features/dashboard/patient/hospitals/HospitalsList")
);
const HospitalDoctorsList = lazy(() =>
  import("../features/dashboard/patient/hospitals/HospitalDoctorList")
);
const HospitalProfile = lazy(() =>
  import("../features/dashboard/patient/hospitals/HospitalProfile")
);
const HospitalImages = lazy(() =>
  import("../features/dashboard/patient/hospitals/HospitalImages")
);
const MedicineOrderPaper = lazy(() =>
  import("../features/dashboard/patient/medicines/OrderPaper")
);
const AnalysisOrderPaper = lazy(() =>
  import("../features/dashboard/patient/analysis/OrderPaper")
);
const PharmacyOrderPaper = lazy(() =>
  import("../features/dashboard/pharmacy/orders/OrderPaper")
);
const LaboratoryOrderPaper = lazy(() =>
  import("../features/dashboard/laboratory/orders/OrderPaper")
);
const DoctorProfile = lazy(() =>
  import("../features/dashboard/patient/DoctorProfile")
);

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
          <Route
            path="edit-profile-Doc/:doctorId"
            element={<EditProfileDoc />}
          />
          {/* Staff */}
          <Route path="employee-salary" element={<EmployeeSalary />} />
          <Route path="add-staff" element={<AddStaff />} />
          <Route path="attendance" element={<Attendance />} />
          {/* Appointments */}
          <Route path="appointment-list" element={<AppointmentList />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path=":doctorName/:doctorId/" element={<PatientsOfDoc />} />
          <Route
            path="edit-appointment/:patientId"
            element={<EditAppointments />}
          />

          <Route path="edit-profile" element={<EditProfileClinic />} />
          <Route path="chat" element={<Chat />} />
          <Route path="reports" element={<Reports />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="view-profile" element={<ClinicProfileView />} />
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
          <Route
            path=":clinicName/:clinicId/patient-list"
            element={<DoctorPatientsList />}
          />
          <Route
            path=":clinicName/:patientId/patient-profile/:appointmentId"
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
          <Route path="hospitals" element={<HospitalsList />} />
          <Route path="chat" element={<PatientChat />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="view-profile" element={<PatientProfileView />} />
          <Route path="edit-profile" element={<PatientEditProfile />} />
          <Route path="clinics/:clinicName/:id" element={<ClinicProfile />} />
          <Route
            path="clinics/:clinicName/:id/doctors"
            element={<DoctorsList />}
          />
          <Route
            path="clinics/:clinicName/:id/images"
            element={<ClinicImages />}
          />
          <Route
            path="hospitals/:hospitalName/:id"
            element={<HospitalProfile />}
          />
          <Route
            path="hospitals/:hospitalName/:id/doctors"
            element={<HospitalDoctorsList />}
          />
          <Route
            path="hospitals/:hospitalName/:id/images"
            element={<HospitalImages />}
          />
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
          <Route path="analysis-results" element={<AnalysisResults />} />
          <Route path="analysis-results/:id" element={<AnalysisOrderPaper />} />
          <Route
            path="laboratories/:laboratoryName"
            element={<LaboratoryProfile />}
          />
          <Route
            path="laboratories/:laboratoryName/analysis-list"
            element={<LaboratoryAnalysisList />}
          />
          <Route
            path=":doctorName/:doctorId/profile"
            element={<DoctorProfile />}
          />
          <Route path="prescriptions" element={<PrescriptionsList />} />
          <Route path="prescription/:id" element={<PrescriptionPaper />} />
          <Route path="medicine-orders" element={<OrdersList />} />
          <Route path="medicine-orders/:id" element={<MedicineOrderPaper />} />
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
          <Route path="medicine-orders/:id" element={<PharmacyOrderPaper />} />
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
          <Route path="analysis-orders" element={<LaboratoryOrderList />} />
          <Route
            path="analysis-orders/:id"
            element={<LaboratoryOrderPaper />}
          />
          <Route path="add-order" element={<OrderAddition />} />
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
