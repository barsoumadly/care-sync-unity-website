import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useUser from "../../useUser";

function ClinicHeader({ clinic }) {
  const { data: userData } = useUser(clinic?.adminId);
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
            <li className="breadcrumb-item active">{clinic?.name} clinic</li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <Link to="/clinic/dashboard" class="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> Back to Clinic
          </Link>
        </div>
      </div>
      <div
        className="card-box profile-header"
        style={{ paddingBottom: "50px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img
                    className="avatar"
                    src={userData?.profilePhoto?.url}
                    alt={clinic?.name}
                  />
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">{clinic?.name}</h3>
                      <small className="text-muted">
                        {clinic?.address.city}
                      </small>

                      <div className="staff-msg">
                        <Link to="/clinic/chat" className="btn btn-primary">
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
                          <a>{clinic?.phone}</a>
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
                              {userData?.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">
                          {clinic?.address?.street}, {clinic?.address?.state},{" "}
                          {clinic?.address?.city} Governorate
                        </span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">
                          {clinic?.founded?.split("T")[0] || "__"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicHeader;
