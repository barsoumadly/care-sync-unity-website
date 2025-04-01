import { Link, useParams } from "react-router-dom";
import useProfile from "./useProfile";
import { useAuth } from "../../../context/AuthContext";
import useDoctor from "./clinics/useDoctor";
import { IoArrowBackOutline } from "react-icons/io5";

function DoctorProfile() {
  const { doctorId, doctorName } = useParams();
  const { data: doctor, isLoading } = useDoctor(doctorId);
  const { data: doctorProfile } = useProfile();
  const { user } = useAuth();
  console.log(doctor);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/doctor/dashboard">Doctors </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">
                    {doctorName.split("-").join(" ")} Profile
                  </li>
                </ul>
              </div>
              <div class="col-sm-5 col-6 text-end">
                <Link
                  to="/patient/dashboard"
                  class="btn btn-primary btn-rounded"
                >
                  <IoArrowBackOutline /> Return Back
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-info">
                        <h4>{doctorName.split("-").join(" ")} Profile</h4>
                      </div>
                      <div className="doctor-profile-head">
                        <div className="profile-bg-img">
                          <img
                            src="https://as1.ftcdn.net/jpg/03/15/16/02/1000_F_315160296_9YU5ZVVrEvTF2Lm56wE9B9YvHZAiN4ZN.jpg"
                            alt="Profile"
                            height="370"
                            width="259"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="profile-user-box">
                              <div className="profile-user-img">
                                <div
                                  style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "50%",
                                    marginBottom: "-145px",
                                    marginLeft: "-4.5px",
                                    color: "#32399300",
                                    height: "150px",
                                    width: "150px",
                                  }}
                                >
                                  X
                                </div>
                                <img
                                  src={doctor?.userId?.profilePhoto?.url}
                                  alt="Profile"
                                />
                              </div>
                              <div className="names-profiles">
                                <h4>Dr. {doctor?.userId?.name}</h4>
                                <h5>{doctor?.specialization}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 d-flex align-items-center">
                            <div className="follow-group">
                              <div className="doctor-follows"></div>
                              <div className="doctor-follows"></div>
                              <div className="doctor-follows"></div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 d-flex align-items-center">
                            <div className="follow-btn-group">
                              <button
                                type="submit"
                                className="btn btn-info follow-btns"
                                style={{ marginLeft: "50px" }}
                              >
                                Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="doctor-personals-grp">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-detail ">
                          <h4 className="mb-3">About me</h4>
                          <p>
                            Hello I am Dr. {doctorName.split("-").join(" ")} a{" "}
                            {doctor?.specialization} in Saudi German Hospital. I
                            love to work with all my hospital staff and senior
                            doctors.
                          </p>
                        </div>
                        <div className="about-me-list">
                          <ul className="list-space">
                            <li>
                              <h4>Gender</h4>
                              <span>{doctor?.gender}</span>
                            </li>
                            <li>
                              <h4>Operation Done</h4>
                              <span>30+</span>
                            </li>
                            <li>
                              <h4>Designation</h4>
                              <span>Sr. {doctor?.specialization}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doctor-personals-grp">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-detail">
                          <h4>Skills:</h4>
                        </div>
                        <div className="skill-blk">
                          <div className="skill-statistics">
                            <div className="skills-head">
                              <h5>Operations</h5>
                              <p>55%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-operations"
                                role="progressbar"
                                style={{ width: "55%" }}
                                aria-valuenow={45}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="skill-statistics">
                            <div className="skills-head">
                              <h5>Consultations</h5>
                              <p>85%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-statistics"
                                role="progressbar"
                                style={{ width: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="skill-statistics">
                            <div className="skills-head">
                              <h5>Open Heart Surgery </h5>
                              <p>75%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-endoscopic"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="skill-statistics">
                            <div className="skills-head">
                              <h5>Patient Visit </h5>
                              <p>90%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-haemoglobin"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doctor-personals-grp">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-detail">
                          <h4>Speciality</h4>
                        </div>
                        <div className="personal-activity">
                          <div className="personal-icons status-grey">
                            <img
                              src="/images/dashborad/icons/medal-01.svg"
                              alt=""
                            />
                          </div>
                          <div className="views-personal">
                            <h4>{doctor?.certification[0]?.name}</h4>
                            <h5>{doctor?.certification[0]?.description}</h5>
                          </div>
                        </div>
                        <div className="personal-activity">
                          <div className="personal-icons status-green">
                            <img
                              src="/images/dashborad/icons/medal-02.svg"
                              alt=""
                            />
                          </div>
                          <div className="views-personal">
                            <h4>{doctor?.certification[1]?.name}</h4>
                            <h5>{doctor?.certification[1]?.description}</h5>
                          </div>
                        </div>
                        <div className="personal-activity mb-0">
                          <div className="personal-icons status-orange">
                            <img
                              src="/images/dashborad/icons/medal-03.svg"
                              alt=""
                            />
                          </div>
                          <div className="views-personal">
                            <h4>{doctor?.certification[2]?.name}</h4>
                            <h5>{doctor?.certification[2]?.description}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                                About Doctor
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="personal-list-out">
                          <div className="row">
                            <div className="col-xl-3 col-md-6">
                              <div className="detail-personal">
                                <h2>Full Name</h2>
                                <h3>Dr.{doctorName.split("-").join(" ")}</h3>
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                              <div className="detail-personal">
                                <h2>Mobile </h2>
                                <h3>{doctor?.phone}</h3>
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                              <div className="detail-personal">
                                <h2>Email</h2>
                                <h3>{doctor?.userId?.email}</h3>
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
                          <p>{doctor?.biography}</p>
                          <p>
                            Worked as Professor of Surgery at Cambrian college -
                            Canda from 20016 - 2020, also worked as Senior
                            Doctor at Midtown Wellness in Covent Garden - London
                            from 2002 - 2008
                          </p>
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
                                  <th>Result</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {new Date(
                                      doctor?.education[0]?.startingDate
                                    ).getFullYear()}{" "}
                                    -{" "}
                                    {new Date(
                                      doctor?.education[0]?.endingDate
                                    ).getFullYear()}
                                  </td>
                                  <td>{doctor?.education[0]?.degree}</td>
                                  <td>{doctor?.education[0]?.institution} </td>
                                  <td>
                                    <button className="custom-badge status-green ">
                                      Distinction
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {new Date(
                                      doctor?.education[1]?.startingDate
                                    ).getFullYear()}{" "}
                                    -{" "}
                                    {new Date(
                                      doctor?.education[1]?.endingDate
                                    ).getFullYear()}
                                  </td>
                                  <td>{doctor?.education[1]?.degree}</td>
                                  <td>{doctor?.education[1]?.institution} </td>
                                  <td>
                                    <button className="custom-badge status-green ">
                                      Distinction
                                    </button>
                                  </td>
                                </tr>
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
                                  <th>Hospital/University</th>
                                  <th>Feedback</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {" "}
                                    {new Date(
                                      doctor?.experience[0]?.startingDate
                                    ).getFullYear()}{" "}
                                    -{" "}
                                    {new Date(
                                      doctor?.experience[0]?.endingDate
                                    ).getFullYear()}
                                  </td>
                                  <td>{doctor?.experience[0]?.position}</td>
                                  <td>{doctor?.experience[0]?.hospital} </td>
                                  <td>
                                    <button className="custom-badge status-orange ">
                                      Good
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {" "}
                                    {new Date(
                                      doctor?.experience[1]?.startingDate
                                    ).getFullYear()}{" "}
                                    -{" "}
                                    {new Date(
                                      doctor?.experience[1]?.endingDate
                                    ).getFullYear()}
                                  </td>
                                  <td>{doctor?.experience[1]?.position}</td>
                                  <td>{doctor?.experience[1]?.hospital} </td>
                                  <td>
                                    <button className="custom-badge status-green ">
                                      Excellence
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {" "}
                                    {new Date(
                                      doctor?.experience[2]?.startingDate
                                    ).getFullYear()}{" "}
                                    -{" "}
                                    {new Date(
                                      doctor?.experience[2]?.endingDate
                                    ).getFullYear()}
                                  </td>
                                  <td>{doctor?.experience[2]?.position}</td>
                                  <td>{doctor?.experience[2]?.hospital} </td>
                                  <td>
                                    <button className="custom-badge status-purple ">
                                      Very Good
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {" "}
                                    {new Date(
                                      doctor?.experience[3]?.startingDate
                                    ).getFullYear()}{" "}
                                    - Till Now
                                  </td>
                                  <td>{doctor?.experience[3]?.position}</td>
                                  <td>{doctor?.experience[3]?.hospital} </td>
                                  <td>
                                    <button className="custom-badge status-pink ">
                                      Perfect
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DoctorProfile;
