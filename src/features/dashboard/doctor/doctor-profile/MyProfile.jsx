import { Link } from "react-router-dom";
import useProfile from "./useProfile";
import { useAuth } from "../../../../context/AuthContext";

function MyProfile() {
  const { data: doctorProfile } = useProfile();
  const { user } = useAuth();
  console.log(doctorProfile);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/doctor/dashboard">Doctors </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Doctors Profile</li>
                </ul>
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
                        <h4>
                          Doctor Profile{" "}
                          <span>
                            <a href="javascript:;">
                              <i className="feather-more-vertical" />
                            </a>
                          </span>
                        </h4>
                      </div>
                      <div className="doctor-profile-head">
                        <div className="profile-bg-img">
                          <img
                            src="/images/dashborad/profile-bg.jpg"
                            alt="Profile"
                          />
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
                                <h5>Followers</h5>
                                <h4>850</h4>
                              </div>
                              <div className="doctor-follows">
                                <h5>Following</h5>
                                <h4>18K</h4>
                              </div>
                              <div className="doctor-follows">
                                <h5>Posts</h5>
                                <h4>250</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 d-flex align-items-center">
                            <div className="follow-btn-group">
                              <button
                                type="submit"
                                className="btn btn-info follow-btns"
                              >
                                Follow
                              </button>
                              <button
                                type="submit"
                                className="btn btn-info message-btns"
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
                            Hello I am Dr. Bruce Willis a Gynaecologist in
                            Sanjivni Hospital Surat. I love to work with all my
                            hospital staff and seniour doctors.
                          </p>
                        </div>
                        <div className="about-me-list">
                          <ul className="list-space">
                            <li>
                              <h4>Gender</h4>
                              <span>{doctorProfile?.gender}</span>
                            </li>
                            <li>
                              <h4>Operation Done</h4>
                              <span>30+</span>
                            </li>
                            <li>
                              <h4>Designation</h4>
                              <span>Sr. Doctor</span>
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
                              <p>45%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-operations"
                                role="progressbar"
                                style={{ width: "45%" }}
                                aria-valuenow={45}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="skill-statistics">
                            <div className="skills-head">
                              <h5>Patient Care</h5>
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
                              <h5>Endoscopic </h5>
                              <p>65%</p>
                            </div>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-endoscopic"
                                role="progressbar"
                                style={{ width: "65%" }}
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
                                className="progress-bar bg-visit"
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
                            <h4>Proffesionals</h4>
                            <h5>Certified Skin Treatment</h5>
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
                            <h4>Certified</h4>
                            <h5>Cold Laser Operation</h5>
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
                            <h4>Medication Laser</h4>
                            <h5>Hair Lose Product</h5>
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
                                <h3>264-625-2583</h3>
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
                                <h3>Los Angeles</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hello-park">
                          <p>
                            Completed my graduation in Gynaecologist Medicine
                            from the well known and renowned institution of
                            India – SARDAR PATEL MEDICAL COLLEGE, BARODA in
                            2000-01, which was affiliated to M.S. University. I
                            ranker in University exams from the same university
                            from 1996-01.
                          </p>
                          <p>
                            Worked as Professor and Head of the department ;
                            Community medicine Department at Sterline Hospital,
                            Rajkot, Gujarat from 2003-2015
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
                                  <td>2002-2005</td>
                                  <td>M.D. of Medicine</td>
                                  <td>University of Wyoming </td>
                                  <td>
                                    <button className="custom-badge status-green ">
                                      Distinction
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2005-2014</td>
                                  <td>MBBS</td>
                                  <td>Netherland Medical College </td>
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
                                  <th>Hospital</th>
                                  <th>Feedback</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2002-2005</td>
                                  <td>Senior doctor </td>
                                  <td>Midtown Medical Clinic </td>
                                  <td>
                                    <button className="custom-badge status-orange ">
                                      Good
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2005-2014</td>
                                  <td>Associate Prof. </td>
                                  <td>Netherland Medical College </td>
                                  <td>
                                    <button className="custom-badge status-green ">
                                      Excellence
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="hello-park">
                          <h5>Conferences, Cources &amp; Workshop Attended</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam
                          </p>
                          <p className="mb-0">
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur
                          </p>
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

export default MyProfile;
