import { useState } from "react";
import { useForm } from "react-hook-form";

// import DynamicField from "./DynamicField";
// import DoctorAvatar from "./DoctorAvatar";
// import DashboardPageHeader from "../DashboardPageHeader";
import { useAuth } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";
import { logout } from "../../../../services/auth";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { BsFillImageFill } from "react-icons/bs";
import PatientPersonalDetails from "../../patient/profile/PersonalDetails";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}

function CompleteDoctorProfile() {
  const [pageNumber, setPageNumber] = useState(1);
  const [patientData, setPatientData] = useState({});

  const { userLogout } = useAuth();

  return (
    <div className="page-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-6">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Profile </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Complete Profile</li>
              </ul>
            </div>
            <div className="col-sm-5 col-6 text-end">
              <Link
                className="btn btn-primary btn-rounded"
                onClick={() => {
                  userLogout();
                  logout();
                }}
              >
                Logout <FiLogOut />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div class="card-header">
                <h4 class="card-title mb-0" style={{ fontSize: "18px" }}>
                  {pageNumber === 1 && "Personal Details"}
                  {pageNumber === 2 && "Address Details"}
                  {pageNumber === 3 && "Health Details"}
                  {pageNumber === 4 && "Profile Photo"}
                </h4>
              </div>
              <div className="card-body">
                <div className="wizard" style={{ marginLeft: "-50px" }}>
                  <ul
                    class="nav nav-tabs justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li
                      className="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Seller Details"
                      data-bs-original-title="Seller Details"
                    >
                      <a
                        class={`nav-link ${
                          pageNumber === 1 && "active"
                        } rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                        id="step1-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step1"
                        aria-selected="true"
                      >
                        <IoPersonSharp />
                      </a>
                    </li>
                    <li
                      class="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Company Document"
                      data-bs-original-title="Company Document"
                    >
                      <a
                        className={`nav-link ${
                          pageNumber === 2 && "active"
                        } rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                        id="step2-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step2"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <IoHome />
                      </a>
                    </li>
                    <li
                      className="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Bank Details"
                      data-bs-original-title="Bank Details"
                    >
                      <a
                        className={`nav-link ${
                          pageNumber === 3 && "active"
                        } rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                        href="#step3"
                        id="step3-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step3"
                        aria-selected="false"
                      >
                        <FaBriefcaseMedical />
                      </a>
                    </li>
                    <li
                      className="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Bank Details"
                      data-bs-original-title="Bank Details"
                    >
                      <a
                        className={`nav-link ${
                          pageNumber === 4 && "active"
                        } rounded-circle mx-auto d-flex align-items-center justify-content-center`}
                        href="#step3"
                        id="step3-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step3"
                        aria-selected="false"
                      >
                        <BsFillImageFill />
                      </a>
                    </li>
                  </ul>
                </div>
                {pageNumber === 1 && (
                  <PatientPersonalDetails
                    patientData={patientData}
                    onChangePatientData={setPatientData}
                    onChangePageNumber={setPageNumber}
                  />
                )}

                {pageNumber === 2 && (
                  <PatientAddressDetails
                    patientData={patientData}
                    onChangePatientData={setPatientData}
                    onChangePageNumber={setPageNumber}
                  />
                )}

                {pageNumber === 3 && (
                  <PatientHealthDetails
                    patientData={patientData}
                    onChangePatientData={setPatientData}
                    onChangePageNumber={setPageNumber}
                  />
                )}

                {pageNumber === 4 && (
                  <PatientProfilePhoto
                    patientData={patientData}
                    onChangePatientData={setPatientData}
                    onChangePageNumber={setPageNumber}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// function CompleteDoctorProfile() {
//   const [education, setEducation] = useState();
//   const [experience, setExperience] = useState();
//   const [certification, setCertification] = useState();
//   const [avatar, setAvatar] = useState(
//     "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
//   );
//   const { register, handleSubmit, reset, formState } = useForm();
//   const { errors } = formState;

//   function onSubmit(data) {
//     const formData = {
//       ...data,
//       education,
//       experience,
//       certification,
//       avatar,
//     };
//     console.log(formData);
//   }

//   function handleCancel() {
//     setEducation([{}]);
//     setExperience([{}]);
//     setCertification([{}]);
//     setAvatar(
//       "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
//     );
//     reset();
//   }
//   return (
//     <>
//       <div className="page-wrapper" style={{ marginLeft: "0px" }}>
//         <div className="content">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <DashboardPageHeader
//                 pageList={[{ name: "Doctor" }]}
//                 currentPage="Complete Profile"
//                 button="Logout"
//               />
//             </div>
//           </div>

//           {/* /Page Header */}
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="card">
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="row">
//                       <div className="col-12">
//                         <div className="form-heading">
//                           <h4>Doctor Details</h4>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="input-block local-forms">
//                           <label>
//                             Specialization{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <select
//                             className="form-control select"
//                             {...register("specialization")}
//                           >
//                             <option>Select Specialization</option>
//                             <option>Orthopedics</option>
//                             <option>Radiology</option>
//                             <option>Dentist</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="input-block local-forms">
//                           <label>
//                             Mobile <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder="+1 23 456890"
//                             {...register("mobile", {
//                               validate: (value) =>
//                                 telephoneCheck(value) ||
//                                 "Enter a valid phone number",
//                             })}
//                           />

//                           <span className="error-message">
//                             {errors?.mobile?.message}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-3">
//                         <div className="input-block local-forms ">
//                           <label>
//                             Age
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control datetimepicker"
//                             type="number"
//                             {...register("age")}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-2">
//                         <div className="input-block select-gender">
//                           <label className="gen-label">
//                             Gender<span className="login-danger">*</span>
//                           </label>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 value={"male"}
//                                 required
//                                 className="form-check-input"
//                                 defaultChecked=""
//                                 {...register("gender")}
//                               />
//                               Male
//                             </label>
//                           </div>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 value={"female"}
//                                 className="form-check-input"
//                                 {...register("gender")}
//                               />
//                               Female
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-12">
//                         <div className="input-block local-forms">
//                           <label>
//                             Start Biography{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <textarea
//                             className="form-control"
//                             rows={3}
//                             cols={30}
//                             {...register("biography")}
//                           />
//                         </div>
//                       </div>
//                       {/* ------------------- */}

//                       <div className="col-12">
//                         <div className="form-heading">
//                           <h4>Professional Details</h4>
//                         </div>
//                       </div>
//                       {/* Education */}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ marginBottom: "20px" }}
//                           >
//                             <h5>Education</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Education",
//                             f2: "Education Details",
//                           }}
//                           serviceList={education}
//                           setServiceList={setEducation}
//                         />
//                       </div>
//                       {/* Experience */}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ margin: "20px 0" }}
//                           >
//                             <h5>Experience</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Experience",
//                             f2: "Experience Details",
//                           }}
//                           serviceList={experience}
//                           setServiceList={setExperience}
//                         />{" "}
//                       </div>
//                       {/* Certification  */}
//                       <div style={{ padding: "20px" }}>
//                         <div className="col-12">
//                           <div
//                             className="form-heading"
//                             style={{ margin: "20px 0" }}
//                           >
//                             <h5>Certification</h5>
//                           </div>
//                         </div>
//                         <DynamicField
//                           fields={{
//                             f1: "Certification",
//                             f2: "Certification Details",
//                           }}
//                           serviceList={certification}
//                           setServiceList={setCertification}
//                         />
//                       </div>
//                       {/* ------------------- */}

//                       <DoctorAvatar avatar={avatar} handleAvatar={setAvatar} />

//                       <div className="col-12">
//                         <div className="doctor-submit text-end">
//                           <button
//                             type="submit"
//                             className="btn btn-primary submit-form me-2"
//                           >
//                             Submit
//                           </button>
//                           <button
//                             type="button"
//                             className="btn btn-primary cancel-form"
//                             onClick={handleCancel}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default CompleteDoctorProfile;
