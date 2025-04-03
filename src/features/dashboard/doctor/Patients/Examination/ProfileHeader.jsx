import { Link } from "react-router-dom";
import { createChat } from "../../../../../services/chat-app";
function ProfileHeader({ data }) {
  const year = new Date().getFullYear();
  console.log(year);

  const handleCreateChat = async function (id) {
    const response = await createChat(
      id,
      JSON.parse(localStorage.getItem("key"))
    );
    localStorage.setItem("chat", JSON.stringify(response.data.data.chat));
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="about-info">
              <h4>Patients Profile</h4>
            </div>
            <div className="doctor-profile-head">
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-4">
                  <div className="profile-user-box">
                    <div className="profile-user-img" style={{ top: "0" }}>
                      <img
                        src={data?.userId?.profilePhoto?.url}
                        style={{ width: "90px" }}
                      />
                      <div className="input-block doctor-up-files profile-edit-icon mb-0"></div>
                    </div>

                    <div className="names-profiles">
                      <h4>{data?.userId?.name}</h4>
                      <h5>Engineer</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 d-flex align-items-center">
                  <div className="follow-group">
                    <div className="doctor-follows">
                      <h5>Gender</h5>
                      <h4>{data?.gender}</h4>
                    </div>
                    <div className="doctor-follows">
                      <h5>Age</h5>
                      <h4>{year - +data?.dateOfBirth.split("-")[0]}</h4>
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
                        onClick={() => handleCreateChat(data?.userId?._id)}
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
