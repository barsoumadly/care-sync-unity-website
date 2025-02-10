function ClinicDashboard() {
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
                  <img src="../images/dashborad/icons/user-icon.svg" alt="" />
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
                    <img src="../images/dashborad/icons/dep-icon-01.svg" alt="" />
                  </div>
                  <div className="departments-list">
                    <h4>General Physician</h4>
                    <p>35%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img src="../images/dashborad/icons/dep-icon-02.svg" alt="" />
                  </div>
                  <div className="departments-list">
                    <h4>Dentist</h4>
                    <p>24%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img src="../images/dashborad/icons/dep-icon-03.svg" alt="" />
                  </div>
                  <div className="departments-list">
                    <h4>ENT</h4>
                    <p>10%</p>
                  </div>
                </div>
                <div className="activity-top">
                  <div className="activity-boxs comman-flex-center">
                    <img src="../images/dashborad/icons/dep-icon-04.svg" alt="" />
                  </div>
                  <div className="departments-list">
                    <h4>Cardiologist</h4>
                    <p>15%</p>
                  </div>
                </div>
                <div className="activity-top mb-0">
                  <div className="activity-boxs comman-flex-center">
                    <img src="../images/dashborad/icons/dep-icon-05.svg" alt="" />
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
                <a href="appointments.html" className="patient-views float-end">
                  Show all
                </a>
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
                        <th>No</th>
                        <th>Patient name</th>
                        <th>Doctor</th>
                        <th>Time</th>
                        <th>Disease</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
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
                        <td>R00001</td>
                        <td>Andrea Lalema</td>
                        <td className="table-image appoint-doctor">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-02.jpg"
                            alt=""
                          />
                          <h2>Dr.Jenny Smith</h2>
                        </td>
                        <td className="appoint-time">
                          <span>12.05.2022 at </span>7.00 PM
                        </td>
                        <td>
                          <button className="custom-badge status-green ">
                            Fracture
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00002</td>
                        <td>Cristina Groves</td>
                        <td className="table-image appoint-doctor">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-03.jpg"
                            alt=""
                          />
                          <h2>Dr.Angelica Ramos</h2>
                        </td>
                        <td className="appoint-time">
                          <span>13.05.2022 at </span>7.00 PM
                        </td>
                        <td>
                          <button className="custom-badge status-green">
                            Fever
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00003</td>
                        <td>Bernardo </td>
                        <td className="table-image appoint-doctor">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-04.jpg"
                            alt=""
                          />
                          <h2>Dr.Martin Doe</h2>
                        </td>
                        <td className="appoint-time">
                          <span>14.05.2022 at </span>7.00 PM
                        </td>
                        <td>
                          <button className="custom-badge status-green">
                            Fracture
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00004</td>
                        <td>Galaviz Lalema</td>
                        <td className="table-image appoint-doctor">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-05.jpg"
                            alt=""
                          />
                          <h2>Dr.William Jerk</h2>
                        </td>
                        <td className="appoint-time">
                          <span>15.05.2022 at </span>7.00 PM
                        </td>
                        <td>
                          <button className="custom-badge status-green">
                            Fracture
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00005</td>
                        <td>Cristina Groves</td>
                        <td className="table-image appoint-doctor">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-03.jpg"
                            alt=""
                          />
                          <h2>Dr.Angelica Ramos</h2>
                        </td>
                        <td className="appoint-time">
                          <span>16.05.2022 at </span>7.00 PM
                        </td>
                        <td>
                          <button className="custom-badge status-green">
                            Fever
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                <a href="patients.html" className="float-end patient-views">
                  Show all
                </a>
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
                        <th>No</th>
                        <th>Patient name</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                        <th>Diagnosis</th>
                        <th>Triage</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
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
                        <td>R00001</td>
                        <td className="table-image">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-02.jpg"
                            alt=""
                          />
                          <h2>Andrea Lalema</h2>
                        </td>
                        <td>21</td>
                        <td>07 January 2002</td>
                        <td>Heart attack</td>
                        <td>
                          <button className="custom-badge status-green ">
                            Non Urgent
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00002</td>
                        <td className="table-image">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-03.jpg"
                            alt=""
                          />
                          <h2>Mark Hay Smith</h2>
                        </td>
                        <td>23</td>
                        <td>06 January 2002</td>
                        <td>Jaundice</td>
                        <td>
                          <button className="custom-badge status-pink">
                            Emergency
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00003</td>
                        <td className="table-image">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-04.jpg"
                            alt=""
                          />
                          <h2>Cristina Groves</h2>
                        </td>
                        <td>25</td>
                        <td>10 January 2002</td>
                        <td>Malaria</td>
                        <td>
                          <button className="custom-badge status-gray">
                            Out Patient
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                        <td>R00004</td>
                        <td className="table-image">
                          <img
                            width={28}
                            height={28}
                            className="rounded-circle"
                            src="../images/dashborad/profiles/avatar-05.jpg"
                            alt=""
                          />
                          <h2>Galaviz Lalema</h2>
                        </td>
                        <td>21</td>
                        <td>09 January 2002</td>
                        <td>Typhoid</td>
                        <td>
                          <button className="custom-badge status-orange">
                            Non Urgent
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
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
                    </tbody>
                  </table>
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
                      <span className="message-author"> Tarah Shropshire </span>
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
                      <span className="message-author"> Domenic Houston </span>
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
  );
}

export default ClinicDashboard;
