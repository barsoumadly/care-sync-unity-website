import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout } from "../../../../services/auth";
import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { BsFillImageFill } from "react-icons/bs";
import PharmacyDetails from "./PharmacyDetails";
import PharmacyAddressDetails from "./PharmacyAddressDetails";
import PharmacyProfilePhoto from "./PharmacyProfilePhoto";
import Header from "../../../../ui/Header";

function PharmacyCompleteProfile() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pharmacyData, setPharmacyData] = useState({});

  const { userLogout } = useAuth();

  return (
    <>
      <Header />
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
              <div class="col-sm-5 col-6 text-end">
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
                    {pageNumber === 1 && "Pharmacy Details"}
                    {pageNumber === 2 && "Address Details"}
                    {pageNumber === 3 && "Pharmacy Profile Photo"}
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
                          <BsFillImageFill />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {pageNumber === 1 && (
                    <PharmacyDetails
                      pharmacyData={pharmacyData}
                      onChangePharmacyData={setPharmacyData}
                      onChangePageNumber={setPageNumber}
                    />
                  )}

                  {pageNumber === 2 && (
                    <PharmacyAddressDetails
                      pharmacyData={pharmacyData}
                      onChangePharmacyData={setPharmacyData}
                      onChangePageNumber={setPageNumber}
                    />
                  )}

                  {pageNumber === 3 && (
                    <PharmacyProfilePhoto
                      pharmacyData={pharmacyData}
                      onChangePharmacyData={setPharmacyData}
                      onChangePageNumber={setPageNumber}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PharmacyCompleteProfile;
