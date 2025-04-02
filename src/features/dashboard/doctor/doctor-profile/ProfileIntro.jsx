import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import useClinicList from "../Patients/ClinicList/useClinicList";

function ProfileIntro({ doctorProfile }) {
  const { user } = useAuth();
  const { data } = useClinicList();
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="about-info">
              <h4>Doctor Profile </h4>
            </div>
            <div className="doctor-profile-head">
              <div className="profile-bg-img">
                <img src="/images/dashborad/profile-bg.jpg" alt="Profile" />
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="profile-user-box">
                    <div className="profile-user-img">
                      <img src={user.profilePhoto} alt="Profile" />
                    </div>
                    <div className="names-profiles">
                      <h4>Dr. {user.name}</h4>
                      <h5>Senior Doctor</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center">
                  <div className="follow-group">
                    <div className="doctor-follows">
                      <h5>Specialization</h5>
                      <h4>{doctorProfile?.specialization}</h4>
                    </div>
                    <div className="doctor-follows">
                      <h5>Gender</h5>
                      <h4>{doctorProfile?.gender}</h4>
                    </div>
                    <div className="doctor-follows">
                      <h5>Current hospitals</h5>
                      <h4>{data.length}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center">
                  <div className="follow-btn-group">
                    <Link to="/doctor/doctor-shedule">
                      <button
                        type="submit"
                        className="btn btn-info follow-btns"
                      >
                        Agenda
                      </button>
                    </Link>
                    <Link to="/doctor/chat">
                      <button
                        type="submit"
                        className="btn btn-info message-btns"
                      >
                        Chat
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

export default ProfileIntro;
