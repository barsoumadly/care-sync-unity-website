import { IoArrowBackOutline } from "react-icons/io5";
import { useAuth } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";
import useProfile from "../useProfile";
import SpinnerMini from "../../../../ui/SpinnerMini";
import useUser from "../../useUser";
import Map from "../../../../ui/Map";

function PatientProfileView() {
  const { data: patientData, isLoading, error } = useProfile();

  const { data } = useUser(isLoading ? null : patientData?.userId?._id);

  if (error) toast.error(error?.message);

  const { user } = useAuth();

  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Profile </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">My Profile</li>
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
                      <div className="doctor-profile-head">
                        <div className="profile-bg-img">
                          <img
                            src="https://img.freepik.com/premium-photo/dental-clinic-interior-with-modern-blue-dentistry-equipment_1028938-84105.jpg"
                            alt="Profile"
                            height="370"
                            width="259"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xl-4 col-md-4">
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
                                  src={data?.profilePhoto?.url}
                                  alt="Profile"
                                />
                              </div>
                              <div className="names-profiles">
                                <h4>{user.name}</h4>
                                <h5>PATIENT</h5>
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
                          <div className="col-lg-6 col-xl-4 d-flex align-items-center">
                            <div className="follow-btn-group py-3">
                              <Link
                                to="/patient/edit-profile"
                                class="btn btn-info follow-btns"
                                style={{ marginLeft: "50px" }}
                              >
                                Edit Profile
                              </Link>
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
                            Hello I am {user.name} a Programmer in VOIS Company.
                            I love to work with all my company team and seniour
                            programmers.
                          </p>
                        </div>
                        <div className="about-me-list">
                          <ul className="list-space">
                            <li>
                              <h4>Gender</h4>
                              <span>{patientData?.gender}</span>
                            </li>
                            <li>
                              <h4>Age</h4>
                              <span>
                                {new Date().getFullYear() -
                                  new Date(
                                    patientData?.dateOfBirth
                                  ).getFullYear()}
                              </span>
                            </li>
                            <li>
                              <h4>Weigh</h4>
                              <span>{patientData?.weight} KG</span>
                            </li>
                            <li>
                              <h4>Height</h4>
                              <span>{patientData?.height} CM</span>
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
                          <h4>Medical Details:</h4>
                        </div>
                        {isLoading ? (
                          <SpinnerMini />
                        ) : (
                          <>
                            <div className="skill-blk">
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Heart Rate</h5>
                                  <p>{patientData?.heartRate} bpm</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-operations"
                                    role="progressbar"
                                    style={{
                                      width: `${patientData?.heartRate}%`,
                                    }}
                                    aria-valuenow={patientData?.heartRate}
                                    aria-valuemin={60}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Blood Pressure</h5>
                                  <p>{patientData?.bloodPressure} mm/Hg</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-haemoglobin"
                                    role="progressbar"
                                    style={{
                                      width: `${70}%`,
                                    }}
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Blood Sugar </h5>
                                  <p>{patientData?.bloodSugar} mg/dL</p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-statistics"
                                    role="progressbar"
                                    style={{
                                      width: `${patientData?.bloodSugar}%`,
                                    }}
                                    aria-valuenow={patientData?.bloodSugar}
                                    aria-valuemin={70}
                                    aria-valuemax={140}
                                  />
                                </div>
                              </div>
                              <div className="skill-statistics">
                                <div className="skills-head">
                                  <h5>Body Mass Index </h5>
                                  <p>
                                    {Math.round(
                                      patientData?.weight /
                                        Math.pow(patientData?.height * 0.01, 2)
                                    ) || "__"}{" "}
                                    KG/M2
                                  </p>
                                </div>
                                <div className="progress mb-0">
                                  <div
                                    className="progress-bar bg-visit"
                                    role="progressbar"
                                    style={{
                                      width: `${Math.round(
                                        patientData?.weight /
                                          Math.pow(
                                            patientData?.height * 0.01,
                                            2
                                          )
                                      )}%`,
                                    }}
                                    aria-valuenow={Math.round(
                                      patientData?.weight /
                                        Math.pow(patientData?.height * 0.01, 2)
                                    )}
                                    aria-valuemin={18.5}
                                    aria-valuemax={50}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
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
                              <a href="patient-profile.html" className="active">
                                <span className="set-about-icon me-2">
                                  <img
                                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/menu-icon-02.svg"
                                    alt=""
                                  />
                                </span>
                                About me
                              </a>
                            </li>
                          </ul>
                        </div>
                        {isLoading ? (
                          <SpinnerMini />
                        ) : (
                          <div className="personal-list-out">
                            <div className="row">
                              <div className="col-xl-3 col-md-6">
                                <div className="detail-personal">
                                  <h2>Full Name</h2>
                                  <h3>{user.name}</h3>
                                </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                <div className="detail-personal">
                                  <h2>Mobile </h2>
                                  <h3>{patientData?.phone}</h3>
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
                                  <h3>
                                    {`${patientData?.address?.address}` +
                                      ` ${patientData?.address?.area}` +
                                      ` ${patientData?.address?.city}`}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="row">
                          <div className="hello-park">
                            <p>
                              I am a {user.name} seeking to improve my health
                              and well-being. I am a 30 year old individual
                              striving to maintain optimal health. I believe in
                              open communication with my medical providers and
                              am dedicated to following prescribed treatment
                              plans.
                            </p>
                            <p>
                              I am looking to partner with my healthcare team to
                              address my health concerns. I value clear
                              explanations and collaborative decision-making. I
                              am wanting to improve my overall health. I am
                              dedicated to working with my doctors and nurses to
                              achieve my health goals.
                            </p>
                          </div>
                          <div className="col-lg-6 col-xl-12 col-md-4">
                            <Map
                              markerPosition={`119 El Hegaz St, Al Matar, El Nozha, Cairo Governorate 4470108`}
                            />
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

export default PatientProfileView;
