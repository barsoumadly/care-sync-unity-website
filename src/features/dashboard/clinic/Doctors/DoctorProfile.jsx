import { NavLink } from "react-router-dom";
function DoctorProfile () {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="doctors.html">Doctors </a>
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
                          Doctor Profile
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
                            alt="Profile"
                            src="../images/dashborad/profile-bg.jpg"
                            /* style={{ display: "none", visibility: "hidden" }} */
                          />
                          {/* <noscript>
                            < img src="../images/dashborad/profile-user.jpg"
                            alt="Profile"/>
                          </noscript> */}
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="profile-user-box">
                              <div className="profile-user-img">
                                <img
                                  alt="Profile"
                                  src="../images/dashborad/profile-user.jpg"
                                  /* style={{
                                    display: "none",
                                    visibility: "hidden",
                                  }} */
                                />
                                {/* <noscript>
                                  &lt;img src="assets/img/profile-user.jpg"
                                  alt="Profile"&gt;
                                </noscript> */}
                                <div className="input-block doctor-up-files profile-edit-icon mb-0">
                                  <div className="uplod d-flex">
                                    <label className="file-upload profile-upbtn mb-0">
                                      <img
                                        src="../images/dashborad/icons/camera-icon.svg"
                                        alt="Profile"
                                      />
                                      <input type="file" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="names-profiles">
                                <h4>Dr. Bruce Willis</h4>
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
                              <NavLink
                              to ={"/clinic/edit-profile-Doc"}
                                /* type="submit" */
                                className="btn btn-info follow-btns">
                                Edit
                              </NavLink>
                              <button
                                type="submit"
                                className="btn btn-info message-btns">
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
                              <span>Female</span>
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
                            <img src="../images/dashborad/icons/medal-01.svg" alt="" />
                          </div>
                          <div className="views-personal">
                            <h4>Proffesionals</h4>
                            <h5>Certified Skin Treatment</h5>
                          </div>
                        </div>
                        <div className="personal-activity">
                          <div className="personal-icons status-green">
                            <img src="../images/dashborad/icons/medal-02.svg" alt="" />
                          </div>
                          <div className="views-personal">
                            <h4>Certified</h4>
                            <h5>Cold Laser Operation</h5>
                          </div>
                        </div>
                        <div className="personal-activity mb-0">
                          <div className="personal-icons status-orange">
                            <img src="../images/dashborad/icons/medal-03.svg" alt="" />
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
                                    src="../images/dashborad/icons/menu-icon-02.svg"
                                    alt=""
                                  />
                                </span>
                                About me
                              </a>
                            </li>
                            <li>
                              <a href="doctor-setting.html">
                                <span className="set-about-icon me-2">
                                  <img
                                    src="../images/dashborad/icons/menu-icon-16.svg"
                                    alt=""
                                  />
                                </span>
                                Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="personal-list-out">
                          <div className="row">
                            <div className="col-xl-3 col-md-6">
                              <div className="detail-personal">
                                <h2>Full Name</h2>
                                <h3>Dr.Bruce Willis</h3>
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
                                <h3>
                                  <a
                                    href="/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="56342423353316333b373f3a7835393b">
                                    [email�protected]
                                  </a>
                                </h3>
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
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">D</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Domenic Houston{" "}
                        </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">B</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Buster Wigton </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Rolland Webber </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Claire Mapes </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Melita Faucher</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Jeffery Lalor</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">L</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Loren Gatlin</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Tarah Shropshire</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="delete_patient"
        className="modal fade delete-modal"
        role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img
                alt=""
                width={50}
                height={46}
                data-cfsrc="../images/dashborad/sent.png"
                style={{ display: "none", visibility: "hidden" }}
              />
              {/*< noscript>
                &lt;img src="../images/dashborad/sent.png" alt="" width="50"
                height="46"&gt;
              </noscript> */}
              <h3>Are you sure want to delete this ?</h3>
              <div className="m-t-20">
                {" "}
                <a href="#" className="btn btn-white" data-bs-dismiss="modal">
                  Close
                </a>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
