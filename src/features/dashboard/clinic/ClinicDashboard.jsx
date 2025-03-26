import { Link } from "react-router-dom";
import LineCH from "./Charts/LineCH";
import PieCH from "./Charts/PieCH";
import { CgMoreVerticalAlt } from "react-icons/cg";
import useAppointmentList from "./Appointments/useAppointmentList";
import useDoctorList from "./Doctors/useDoctorList";

const recentPatients = [
  {
    id: 1,
    turn: "R00001",
    name: "Andrea Lalema",
    doctorName: "Dr.Jenny Smith",
    paymentType: "Cash",
    status: "Non Urgent",
    src: "../images/dashborad/profiles/avatar-02.jpg",
    statusColor: "status-green",
  },
  {
    id: 2,
    turn: "R00002",
    name: "Mark Hay Smith",
    doctorName: "Dr.Martin Doe",
    paymentType: "Paypal",
    status: "Emergency",
    src: "../images/dashborad/profiles/avatar-03.jpg",
    statusColor: "status-pink",
  },
  {
    id: 3,
    turn: "R00003",
    name: "Cristina Groves",
    doctorName: "Dr.William Jerk",
    paymentType: "Debit Card",
    status: "Out Patient",
    src: "../images/dashborad/profiles/avatar-04.jpg",
    statusColor: "status-gray",
  },
  {
    id: 4,
    turn: "R00004",
    name: "Galaviz Lalema",
    doctorName: "Dr.Angelica Ramos",
    paymentType: "Cash",
    status: "Non Urgent",
    src: "../images/dashborad/profiles/avatar-05.jpg",
    statusColor: "status-green",
  },
];
const upcomingAppointments = [
  {
    doctor: {
      specialization: "Neurology",
      status: "active",
    },
    schedule: [
      {
        day: "Monday",
        endTime: "10:13",
        startTime: "09:13",
      },
    ],

    user: {
      doctorName: "Dr.Jenny Smith",
      profilePhoto: {
        url: "../images/dashborad/profiles/avatar-01.jpg",
      },
    },
  },
  {
    doctor: {
      specialization: "Neurology",
      status: "active",
    },
    schedule: [
      {
        day: "Monday",
        endTime: "10:13",
        startTime: "09:13",
      },
    ],

    user: {
      doctorName: "Dr.Jenny Smith",
      profilePhoto: {
        url: "../images/dashborad/profiles/avatar-01.jpg",
      },
    },
  },
  {
    doctor: {
      specialization: "Neurology",
      status: "active",
    },
    schedule: [
      {
        day: "Monday",
        endTime: "10:13",
        startTime: "09:13",
      },
    ],

    user: {
      doctorName: "Dr.Jenny Smith",
      profilePhoto: {
        url: "../images/dashborad/profiles/avatar-01.jpg",
      },
    },
  },
  {
    doctor: {
      specialization: "Neurology",
      status: "active",
    },
    schedule: [
      {
        day: "Monday",
        endTime: "10:13",
        startTime: "09:13",
      },
    ],

    user: {
      doctorName: "Dr.Jenny Smith",
      profilePhoto: {
        url: "../images/dashborad/profiles/avatar-01.jpg",
      },
    },
  },
  {
    doctor: {
      specialization: "Neurology",
      status: "Not active",
    },
    schedule: [
      {
        day: "Monday",
        endTime: "10:13",
        startTime: "09:13",
      },
    ],

    user: {
      doctorName: "Dr.Jenny Smith",
      profilePhoto: {
        url: "../images/dashborad/profiles/avatar-01.jpg",
      },
    },
  },
];
function ClinicDashboard() {
  const { data: doctors, isLoading: isdoctor } = useDoctorList();

  console.log("doctors: ", doctors);

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Admin Dashboard</li>
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
                  Good Morning, <span>Daniel Bruk</span>
                </h2>
                <p>Have a nice day at work</p>
              </div>
            </div>
            <div className="col-md-6 position-blk">
              <div className="morning-img">
                <img src="../images/dashborad/morning-img-01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src="../images/dashborad/icons/calendar.svg" alt="" />
              </div>
              <div className="dash-content dash-count">
                <h4>Appointments</h4>
                <h2>
                  <span className="counter-up">250</span>
                </h2>
                <p>
                  <span className="passive-view">
                    <i className="feather-arrow-up-right me-1" />
                    40%
                  </span>{" "}
                  vs last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src="../images/dashborad/icons/profile-add.svg" alt="" />
              </div>
              <div className="dash-content dash-count">
                <h4>New Patients</h4>
                <h2>
                  <span className="counter-up">140</span>
                </h2>
                <p>
                  <span className="passive-view">
                    <i className="feather-arrow-up-right me-1" />
                    20%
                  </span>{" "}
                  vs last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src="../images/dashborad/icons/scissor.svg" alt="" />
              </div>
              <div className="dash-content dash-count">
                <h4>Operations</h4>
                <h2>
                  <span className="counter-up">56</span>
                </h2>
                <p>
                  <span className="negative-view">
                    <i className="feather-arrow-down-right me-1" />
                    15%
                  </span>{" "}
                  vs last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src="../images/dashborad/icons/empty-wallet.svg" alt="" />
              </div>
              <div className="dash-content dash-count">
                <h4>Earnings</h4>
                <h2>
                  $<span className="counter-up"> 20,250</span>
                </h2>
                <p>
                  <span className="passive-view">
                    <i className="feather-arrow-up-right me-1" />
                    30%
                  </span>{" "}
                  vs last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="chart-title patient-visit">
                  <h4>Patient Visit by Gender</h4>
                  <div>
                    <ul className="nav chat-user-total">
                      <li>
                        <i
                          className="fa fa-circle current-users"
                          aria-hidden="true"
                        />
                        Male 75%
                      </li>
                      <li>
                        <i
                          className="fa fa-circle old-users"
                          aria-hidden="true"
                        />{" "}
                        Female 25%
                      </li>
                    </ul>
                  </div>
                  <div className="input-block mb-0">
                    <select className="form-control select">
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                    </select>
                  </div>
                </div>
                <div>
                  <LineCH />
                </div>
                <div id="patient-chart" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
            <div className="card">
              <div className="card-body">
                <div className="chart-title">
                  <h4>Patient by Department</h4>
                </div>
                <div id="donut-chart-dash" className="chart-user-icon">
                  <PieCH />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12  col-xl-4">
            <div className="card top-departments">
              <div className="card-header">
                <h4 className="card-title mb-0">Top Departments</h4>
              </div>
              <div className="card-body">
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img
                      src="../images/dashborad/icons/dep-icon-01.svg"
                      alt=""
                    />
                  </div>
                  <div className="departments-list">
                    <h4>General Physician</h4>
                    <p>35%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img
                      src="../images/dashborad/icons/dep-icon-02.svg"
                      alt=""
                    />
                  </div>
                  <div className="departments-list">
                    <h4>Dentist</h4>
                    <p>24%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img
                      src="../images/dashborad/icons/dep-icon-03.svg"
                      alt=""
                    />
                  </div>
                  <div className="departments-list">
                    <h4>ENT</h4>
                    <p>10%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img
                      src="../images/dashborad/icons/dep-icon-04.svg"
                      alt=""
                    />
                  </div>
                  <div className="departments-list">
                    <h4>Cardiologist</h4>
                    <p>15%</p>
                  </div>
                </div>
                <div className="activity-top mb-0">
                  <div className="activity-boxs comman-flex-center">
                    <img
                      src="../images/dashborad/icons/dep-icon-05.svg"
                      alt=""
                    />
                  </div>
                  <div className="departments-list">
                    <h4>Opthomology</h4>
                    <p>20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12  col-xl-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-inline-block">
                  Upcoming Appointments
                </h4>{" "}
                <Link
                  to={"/clinic/doctor-list"}
                  className="patient-views float-end">
                  Show all
                </Link>
              </div>
              <div className="card-body p-0 table-dash">
                <div className="table-responsive">
                  <table className="table mb-0 border-0 datatable custom-table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </th>
                        <th>Doctor's Name</th>
                        <th>Specialization </th>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>

                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>

                    <tbody>
                      {upcomingAppointments.map((doc) => (
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>

                          <td className="table-image appoint-doctor">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle"
                              src={doc.user.profilePhoto.url}
                              alt=""
                            />
                            <h2>{doc.user.doctorName}</h2>
                          </td>
                          <td>
                            <button className="custom-badge status-gray ">
                              {doc.doctor.specialization}
                            </button>
                          </td>
                          <td>{doc.schedule[0].day}</td>
                          <td className="appoint-time">
                            <span>{doc.schedule[0].startTime} </span>
                          </td>
                          <td className="appoint-time">
                            <span>{doc.schedule[0].endTime} </span>
                          </td>
                          
                          <td>
                            <button
                              className={`custom-badge ${
                                doc.doctor.status === "active"
                                  ? "status-green"
                                  : "status-red"
                              }`}>
                              {doc.doctor.status}
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-appointment.html">
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_appointment">
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <h4 className="card-title d-inline-block">Recent Patients </h4>{" "}
                <Link
                  to={"/clinic/appointment-list"}
                  className="float-end patient-views">
                  Show all
                </Link>
              </div>
              <div className="card-block table-dash">
                <div className="table-responsive">
                  <table className="table mb-0 border-0 datatable custom-table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </th>
                        <th>Turn</th>
                        <th>Patient name</th>
                        <th>Doctor's Name</th>
                        <th>Payment Type</th>
                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {recentPatients.map((patient) => (
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>{patient.turn}</td>
                          <td className="table-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle"
                              src={patient.src}
                              alt=""
                            />
                            <h2>{patient.name}</h2>
                          </td>
                          <td>{patient.doctorName}</td>
                          <td>{patient.paymentType}</td>

                          <td>
                            <button
                              className={`custom-badge ${patient.statusColor}`}>
                              {patient.status}
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-patient.html">
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_appointment">
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicDashboard;
