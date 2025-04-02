import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
function AboutMe({ doctorProfile, isLoading }) {
  const { user } = useAuth();
  return (
    <div className="col-lg-8">
      <div className="doctor-personals-grp">
        <div className="card">
          <div className="card-body">
            <div className="tab-content-set">
              <ul className="nav">
                <li>
                  <a href="doctor-profile.html" className="active">
                    <span className="set-about-icon me-2">
                      <img
                        src="/images/dashborad/icons/menu-icon-02.svg"
                        alt=""
                      />
                    </span>
                    About me
                  </a>
                </li>
                <li>
                  <Link to="/doctor/edit-profile">
                    <span className="set-about-icon me-2">
                      <img
                        src="/images/dashborad/icons/menu-icon-16.svg"
                        alt=""
                      />
                    </span>
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="personal-list-out">
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="detail-personal">
                        <h2>Full Name</h2>
                        <h3>Dr.{user.name}</h3>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="detail-personal">
                        <h2>Mobile </h2>
                        <h3>{doctorProfile?.phone}</h3>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="detail-personal">
                        <h2>Email</h2>
                        <h3>{user.email}</h3>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="detail-personal">
                        <h2>Location</h2>
                        <h3>Cairo</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hello-park">
                  <p>{doctorProfile?.biography}</p>
                </div>
                <div className="hello-park mb-2">
                  <h5>Education</h5>
                  <div className="table-responsive">
                    <table className="table mb-0 border-0 custom-table profile-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Degree</th>
                          <th>Institute</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctorProfile?.education?.map((edu) => (
                          <tr>
                            <td>
                              {edu.startingDate.split("-")[0]}-
                              {edu.endingDate.split("-")[0]}
                            </td>
                            <td>{edu?.degree}</td>
                            <td>{edu?.institution}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="hello-park mb-2">
                  <h5>Experience</h5>
                  <div className="table-responsive">
                    <table className="table mb-0 border-0 custom-table profile-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Position</th>
                          <th>Hospital</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctorProfile?.experience?.map((exp) => (
                          <tr>
                            <td>
                              {exp?.startingDate?.split("-")[0]}-
                              {exp?.endingDate?.split("-")[0]}
                            </td>
                            <td>{exp?.position}</td>
                            <td>{exp?.hospital} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
