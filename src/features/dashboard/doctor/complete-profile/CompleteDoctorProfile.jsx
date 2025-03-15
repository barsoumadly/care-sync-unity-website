import { useState } from "react";

import { useAuth } from "../../../../context/AuthContext";

import { IoPersonSharp } from "react-icons/io5";
import { FaKitMedical } from "react-icons/fa6";
import { BsFillImageFill } from "react-icons/bs";

import DoctorPersonalDetails from "./PersonalDetails";
import DoctorProfessionalDetails from "./DoctorProfessionalDetails";
import DoctorProfilePhoto from "./DoctorProfilePhoto";
import Header from "../../../../ui/Header";
import { useForm } from "react-hook-form";
import PageWrapper from "../PageWrapper";
import PageCard from "../PageCard";
import DashboardPageHeader from "../DashboardPageHeader";

function CompleteDoctorProfile() {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const [pageNumber, setPageNumber] = useState(1);
  // const [doctorData, setDoctorData] = useState({});
  const { userLogout } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: [{}],
      experience: [{}],
      certification: [{}],
    },
  });

  function logout() {
    userLogout();
    logout();
  }
  function performSubmit(data) {
    console.log(data, profilePhoto);

    // navigate("/doctor/dashboard");
  }
  return (
    <>
      <Header />
      <PageWrapper type="true">
        {/* Page Header */}
        <div className="page-header">
          <DashboardPageHeader
            pageList={[{ name: "Profile", link: "/doctor/complete-profile" }]}
            currentPage="Complete Profile"
            button={"Logout"}
          />
        </div>

        <div className="row">
          <PageCard>
            <div className="card-header">
              <h4 className="card-title mb-0" style={{ fontSize: "18px" }}>
                {pageNumber === 1 && "Personal Details"}
                {pageNumber === 2 && "Professional Details"}

                {pageNumber === 3 && "Profile Photo"}
              </h4>
            </div>

            <div className="wizard" style={{ marginLeft: "-50px" }}>
              <ul
                className="nav nav-tabs justify-content-center"
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
                    className={`nav-link ${
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
                  className="nav-item flex-fill"
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
                  >
                    <FaKitMedical />
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
                    <BsFillImageFill />
                  </a>
                </li>
              </ul>
            </div>
          </PageCard>

          <form onSubmit={handleSubmit(performSubmit)}>
            {pageNumber === 1 && (
              <PageCard>
                <DoctorPersonalDetails
                  register={register}
                  errors={errors}
                  onChangePageNumber={setPageNumber}
                />{" "}
              </PageCard>
            )}

            {pageNumber === 2 && (
              <DoctorProfessionalDetails
                register={register}
                control={control}
                errors={errors}
                onChangePageNumber={setPageNumber}
              />
            )}

            {pageNumber === 3 && (
              <PageCard>
                <DoctorProfilePhoto
                  profilePhoto={profilePhoto}
                  setProfilePhoto={setProfilePhoto}
                />

                <div className="row">
                  <div className=" col-md-6 col-xl-1" style={{ width: "50%" }}>
                    <div className="doctor-submit ">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                        onClick={() =>
                          setPageNumber((pageNumber) => pageNumber - 1)
                        }
                      >
                        Back
                      </button>
                    </div>
                  </div>
                  <div className=" col-md-6 col-xl-11" style={{ width: "50%" }}>
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </PageCard>
            )}
          </form>
        </div>
      </PageWrapper>
    </>
  );
}

export default CompleteDoctorProfile;
