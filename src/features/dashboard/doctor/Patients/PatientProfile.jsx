import DashboardPageHeader from "../DashboardPageHeader";
import TextEditor from "../../../../ui/TextEditor ";
import { useState } from "react";
import DynamicInput from "../DynamicInput";

function PatientProfile() {
  const [option, setOption] = useState(1);
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <DashboardPageHeader
            pageList={[
              { name: "Patients", link: "/doctor/dashboard" },
              { name: "Clinics List", link: "/doctor/patients" },
              { name: "Patient List", link: "/doctor/patient-list" },
            ]}
            currentPage="Patient Profile"
          />

          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <ProfileHeader />

              <div className="row">
                <div className="col-lg-4">
                  <AboutPatient />
                  <StaticOfHealth />
                </div>
                <div className="col-lg-8">
                  <div className="doctor-personals-grp">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-content-set">
                          <ul className="nav">
                            <li>
                              <a
                                className={`${option === 1 ? "active" : ""}`}
                                onClick={() => setOption(1)}
                              >
                                <span className="set-about-icon me-2">
                                  <img
                                    src="/images/dashborad/icons/menu-icon-02.svg"
                                    alt=""
                                  />
                                </span>
                                Examination
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => setOption(2)}
                                className={`${option === 2 ? "active" : ""}`}
                              >
                                <span className="set-about-icon me-2">
                                  <img
                                    src="/images/dashborad/icons/menu-icon-16.svg"
                                    alt=""
                                  />
                                </span>
                                Medical History
                              </a>
                            </li>
                          </ul>
                        </div>
                        {option === 1 ? <Examination /> : <MedicalHistory />}
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

export default PatientProfile;

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
                    <button type="submit" className="btn btn-info follow-btns">
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
  );
}

function StaticOfHealth() {
  return (
    <div className="doctor-personals-grp">
      <div className="card">
        <div className="card-body">
          <div className="heading-detail">
            <h4>General Health:</h4>
          </div>
          <div className="skill-blk">
            <div className="skill-statistics">
              <div className="skills-head">
                <h5>Heart Beat</h5>
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
                <h5>Haemoglobin</h5>
                <p>85%</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-haemoglobin"
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
                <h5>Blood Pressure </h5>
                <p>65%</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-statistics"
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
                <h5>Sugar </h5>
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
  );
}

function AboutPatient() {
  return (
    <div className="doctor-personals-grp">
      <div className="card">
        <div className="card-body">
          <div className="heading-detail ">
            <h4 className="mb-3">About me</h4>
            <p>
              Hello I am Smith Bruklin a Gynaecologist in Sanjivni Hospital
              Surat. I love to work with all my hospital staff and seniour
              doctors.
            </p>
          </div>
          <div className="about-me-list">
            <ul className="list-space">
              <li>
                <h4>Gender</h4>
                <span>Male</span>
              </li>
              <li>
                <h4>Operation Done</h4>
                <span>30+</span>
              </li>
              <li>
                <h4>Designation</h4>
                <span>Engineer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Examination() {
  return (
    <>
      <div className="personal-list-out">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Full Name</h2>
              <h3>Smith Bruklin</h3>
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
                  href="cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="0a7967637e624a6f676b636624696567"
                >
                  [email&nbsp;protected]
                </a>
              </h3>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="detail-personal">
              <h2>Location</h2>
              <h3>USA</h3>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margiTop: "10%" }}>
        <div className="card">
          <div className="card-body">
            <div className="doctor-profile-head" style={{ padding: "20px" }}>
              {" "}
              <h3 className="mb-5">Prescription</h3> <DynamicInput />
            </div>
          </div>
        </div>

        {/* <TextEditor placeholder="Write the prescription to the pharmacy..." /> */}

        <div style={{ margiTop: "10%" }}>
          <div className="card">
            <div className="card-body">
              <div className="doctor-profile-head" style={{ padding: "20px" }}>
                <h3 className="mb-5">Analysis</h3> <DynamicInput />
              </div>
            </div>
          </div>{" "}
        </div>

        {/* <TextEditor placeholder="Write the analysis to the lab..." /> */}
      </div>
    </>
  );
}

function MedicalHistory() {
  return (
    <div className="hello-park">
      <p>
        Completed my graduation in Gynaecologist Medicine from the well known
        and renowned institution of India – SARDAR PATEL MEDICAL COLLEGE, BARODA
        in 2000-01, which was affiliated to M.S. University. I ranker in
        University exams from the same university from 1996-01.
      </p>
      <p>
        Worked as Professor and Head of the department ; Community medicine
        Department at Sterline Hospital, Rajkot, Gujarat from 2003-2015
      </p>
    </div>
  );
}
