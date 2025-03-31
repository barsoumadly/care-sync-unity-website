import { Link } from "react-router-dom";
import PieCharts from "../charts/PieChart";
import AreaCharts from "../charts/AreaCharts";
import AppointmentTable from "./AppointmentTable";

const genderData = [
  { name: "Male", duration: "Male", value: 40, color: "#3b82f6" },
  { name: "Female", duration: "Female", value: 26, color: "#14b8a6" },
];

const appointmentData = [
  {
    name: "Saint Fatima",
    duration: "Saint Fatima",
    value: 16,
    color: "#a5c5fb",
  },
  { name: "90th Street", duration: "90th Street", value: 26, color: "#14b8a6" },
  {
    name: "Heliopolis Hospital",
    duration: "Heliopolis Hospital",
    value: 35,
    color: "#3b82f6",
  },
];

function DoctorDashboard() {
  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="dashboard">Dashboard </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Doctor Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Good Morning, <span>Dr.Smith Wayne</span>
                    </h2>
                    <p>Have a nice day at work</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <img src="/images/dashborad/morning-img-02.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-list-blk">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">30</span>
                        <span>/85</span>
                        <span className="status-green">+60%</span>
                      </h4>
                      <h5>Appointments</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">20</span>
                        <span>/125</span>
                        <span className="status-pink">-20%</span>
                      </h4>
                      <h5>Consultations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <span className="counter-up">12</span>
                        <span>/30</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Operations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img
                        src="/images/dashborad/icons/doctor-dash-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        $<span className="counter-up">530</span>
                        <span />
                        <span className="status-green">+50%</span>
                      </h4>
                      <h5>Earnings</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div id="radial-patients">
                      <PieCharts data={appointmentData} label="Appointments" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title patient-visit mb-0">
                      <h4>Income</h4>
                      <div className="income-value">
                        <h3>
                          <span>$</span> 200
                        </h3>
                        <p>
                          <span className="passive-view">
                            <i className="feather-arrow-up-right me-1" />
                            40%
                          </span>
                          vs last month
                        </p>
                      </div>
                      <div className="input-block mb-0">
                        <select className="form-control select">
                          <option>2024-2025</option>
                        </select>
                      </div>
                    </div>
                    <div id="apexcharts-area">
                      <AreaCharts />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                <div className="card">
                  <div className="card-body">
                    <div id="radial-patients">
                      <PieCharts data={genderData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-xl-7">
                <div className="row">
                  <div className="col-12 col-md-12 col-xl-6">
                    <div className="struct-point">
                      <div className="card patient-structure">
                        <div className="card-body">
                          <h5>New Patients</h5>
                          <h3>
                            56
                            <span className="status-green">
                              <img
                                src="/images/dashborad/icons/sort-icon-01.svg"
                                alt=""
                                className="me-1"
                              />
                              60%
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-6">
                    <div className="struct-point">
                      <div className="card patient-structure">
                        <div className="card-body">
                          <h5>Old Patients</h5>
                          <h3>
                            35
                            <span className="status-pink">
                              <img
                                src="/images/dashborad/icons/sort-icon-02.svg"
                                alt=""
                                className="me-1"
                              />
                              -20%
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <AppointmentTable />
              </div>
              <div className="col-12 col-lg-12 col-xl-5 d-flex">
                <div className="card flex-fill comman-shadow">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      Recent Appointments
                    </h4>
                    <a
                      href="appointments.html"
                      className="patient-views float-end"
                    >
                      Show all
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>08:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity hide-activity">
                            <ul className="doctor-date-list mb-2">
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00
                                <span>Benjamin Bruklin</span>
                              </li>
                              <li className="stick-line">
                                <i className="fas fa-circle me-2" />
                                08:00
                                <span>Andrea Lalema</span>
                              </li>
                              <li className="dropdown ongoing-blk">
                                <a
                                  href="#"
                                  className="dropdown-toggle active-doctor"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fas fa-circle me-2 active-circles" />
                                  08:00 <span>Andrea Lalema</span>
                                  <span className="ongoing-drapt">
                                    Ongoing
                                    <i className="feather-chevron-down ms-2" />
                                  </span>
                                </a>
                                <ul className="doctor-sub-list dropdown-menu">
                                  <li className="patient-new-list dropdown-item">
                                    Patient<span>Marie kennedy</span>
                                    <a
                                      href="javascript:;"
                                      className="new-dot status-green"
                                    >
                                      <i className="fas fa-circle me-1 fa-2xs" />
                                      New
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    Time<span>8:30 - 9:00 (30min)</span>
                                  </li>
                                  <li className="schedule-blk mb-0 pt-2 dropdown-item">
                                    <ul className="nav schedule-time">
                                      <li>
                                        <a href="javascript:;">
                                          <img
                                            src="/images/dashborad/icons/trash.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <img
                                            src="/images/dashborad/icons/profile.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;">
                                          <img
                                            src="/images/dashborad/icons/edit.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                    <a className="btn btn-primary appoint-start">
                                      Start Appointment
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>09:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:00
                                <span>Galaviz Lalema</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:20
                                <span>Benjamin Bruklin</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                09:40
                                <span>Jenny Smith</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>10:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:00
                                <span>Cristina Groves</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                10:30
                                <span>Benjamin Bruklin</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="teaching-card">
                      <ul className="steps-history">
                        <li>11:00</li>
                      </ul>
                      <ul className="activity-feed">
                        <li className="feed-item d-flex align-items-center">
                          <div className="dolor-activity">
                            <ul className="doctor-date-list mb-2">
                              <li>
                                <i className="fas fa-circle me-2" />
                                11:00
                                <span>Cristina Groves</span>
                              </li>
                              <li>
                                <i className="fas fa-circle me-2" />
                                11:30
                                <span>Benjamin Bruklin</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
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

export default DoctorDashboard;
