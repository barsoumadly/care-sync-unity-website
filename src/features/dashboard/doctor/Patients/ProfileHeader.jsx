import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="about-info">
              <h4>
                Patients Profile{" "}
                <span>
                  <a>
                    <i className="feather-more-vertical" />
                  </a>
                </span>
              </h4>
            </div>
            <div className="doctor-profile-head">
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-4">
                  <div className="profile-user-box">
                    <div className="names-profiles">
                      <h4>Smith Bruklin</h4>
                      <h5>Engineer</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center">
                  <div className="follow-group">
                    <div className="doctor-follows">
                      <h5>Gender</h5>
                      <h4>Female</h4>
                    </div>
                    <div className="doctor-follows">
                      <h5>Age</h5>
                      <h4>18</h4>
                    </div>
                    <div className="doctor-follows">
                      <h5>specialty</h5>
                      <h4>Medical </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4 d-flex align-items-center">
                  <div className="follow-btn-group py-3">
                    <Link to="/doctor/chat">
                      <button
                        type="submit"
                        className="btn btn-info follow-btns"
                      >
                        Message
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
