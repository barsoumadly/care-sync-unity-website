import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ClinicHeader({ activeTab }) {
  const clinic = JSON.parse(localStorage.getItem("clinic"));

  return (
    <>
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Profile </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">
              {clinic.name}
              {activeTab === "doctor-list"
                ? " Doctors"
                : activeTab === "images"
                ? " Images"
                : " Profile"}
            </li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <Link to="/patient/clinics" class="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> Back to Clinics
          </Link>
        </div>
      </div>
      <div className="card-box profile-header">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <a href="#">
                    <img
                      className="avatar"
                      src={clinic.profilePhoto}
                      alt={clinic.name}
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">{clinic.name}</h3>
                      <small className="text-muted">{clinic.city}</small>
                      <div className="staff-id">
                        <span
                          className="rating rating-score"
                          // style={{ cursor: "pointer" }}
                        >
                          <img
                            alt={1}
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/plugins/raty/images/star-on.png"
                            title="bad"
                          />
                          &nbsp;
                          <img
                            alt={2}
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/plugins/raty/images/star-on.png"
                            title="poor"
                          />
                          &nbsp;
                          <img
                            alt={3}
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/plugins/raty/images/star-on.png"
                            title="regular"
                          />
                          &nbsp;
                          <img
                            alt={4}
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/plugins/raty/images/star-off.png"
                            title="good"
                          />
                          &nbsp;
                          <img
                            alt={5}
                            src="https://preclinic.dreamstechnologies.com/html/template/assets/plugins/raty/images/star-off.png"
                            title="gorgeous"
                          />
                        </span>
                      </div>
                      <div className="staff-msg">
                        <Link to="/patient/chat" className="btn btn-primary">
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <span className="title">Phone:</span>
                        <span className="text">
                          <a>{clinic.phone}</a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Email:</span>
                        <span className="text">
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="c2a1b0abb1b6abaca3a5b0adb4a7b182a7baa3afb2aea7eca1adaf"
                            >
                              {clinic.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">{clinic.address}</span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">{clinic.foundedDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
          <li className="nav-item">
            <Link
              className={`nav-link${activeTab === "about" ? " active" : ""}`}
              to={`/patient/clinics/${clinic.slug}`}
              data-bs-toggle="tab"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/patient/clinics/${clinic.slug}/doctors`}
              className={`nav-link${
                activeTab === "doctor-list" ? " active" : ""
              }`}
              data-bs-toggle="tab"
            >
              Doctors List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${activeTab === "images" ? " active" : ""}`}
              to={`/patient/clinics/${clinic.slug}/images`}
              data-bs-toggle="tab"
            >
              Images
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ClinicHeader;
