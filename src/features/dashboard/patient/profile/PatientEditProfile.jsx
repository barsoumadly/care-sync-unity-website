import { useState } from "react";
import PatientPersonalDetails from "./PersonalDetails";
import PatientAddressDetails from "./PatientAddressDetails";
import PatientHealthDetails from "./PatientHealthDetails";
import PatientProfilePhoto from "./PatientProfilePhoto";
import toast from "react-hot-toast";
import { IoArrowBackOutline, IoHome, IoPersonSharp } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { BsFillImageFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function PatientEditProfile() {
  const [pageNumber, setPageNumber] = useState(1);
  const [patientData, setPatientData] = useState({});

  const handleSubmit = function (event) {
    event.preventDefault();
    if (phoneNumber.length > 12) {
      return toast.error("Enter a valid phone number.");
    } else if (Number(age) < 0 || Number(age) > 100) {
      return toast.error("Enter a valid age.");
    } else if (Number(temperature) < 34 || Number(temperature) > 45) {
      return toast.error("Enter a valid temperature.");
    } else if (Number(weigh) < 39 || Number(weigh) > 200) {
      return toast.error("Enter a valid weigh.");
    } else if (Number(height) < 54 || Number(height) > 247) {
      return toast.error("Enter a valid height.");
    } else if (Number(heartRate) < 59 || Number(heartRate) > 101) {
      return toast.error("Enter a valid heart rate.");
    } else if (Number(bloodSugar) < 69 || Number(bloodSugar) > 141) {
      return toast.error("Enter a valid blood sugar.");
    } else if (Number(bloodPressure) < 1.4 || Number(bloodPressure) > 2.26) {
      return toast.error("Enter a valid blood pressure.");
    }
  };

  return (
    <div className="page-wrapper">
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
                <li className="breadcrumb-item active">Edit Profile</li>
              </ul>
            </div>

            <div class="col-sm-5 col-6 text-end">
              <Link
                to="/patient/view-profile"
                class="btn btn-primary btn-rounded"
              >
                <IoArrowBackOutline /> Return Back
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
                      class="nav-item flex-fill"
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
                        tabindex="-1"
                      >
                        <FaBriefcaseMedical />
                      </a>
                    </li>
                    <li
                      class="nav-item flex-fill"
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
                        tabindex="-1"
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

export default PatientEditProfile;
