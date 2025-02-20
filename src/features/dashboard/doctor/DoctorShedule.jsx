import { CgMoreVerticalAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

function DoctorShedule() {
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
                    <Link to="/doctor/dashboard">Doctor Shedule </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Schedule List</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <div className="page-table-header mb-2">
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="doctor-table-blk">
                          <h3>Schedule List</h3>
                          <div className="doctor-search-blk">
                            <div className="top-nav-search table-search-blk">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search here"
                                />
                                <a className="btn">
                                  <img
                                    src="/images/dashborad/icons/search-normal.svg"
                                    alt=""
                                  />
                                </a>
                              </form>
                            </div>
                            <div className="add-group">
                              <a
                                href="add-schedule.html"
                                className="btn btn-primary add-pluss ms-2"
                              >
                                <img
                                  src="/images/dashborad/icons/plus.svg"
                                  alt=""
                                />
                              </a>
                              <a className="btn btn-primary doctor-refresh ms-2">
                                <img
                                  src="/images/dashborad/icons/re-fresh.svg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <a href="javascript:;" className=" me-2">
                          <img
                            src="/images/dashborad/icons/pdf-icon-01.svg"
                            alt=""
                          />
                        </a>
                        <a href="javascript:;" className=" me-2">
                          <img
                            src="/images/dashborad/icons/pdf-icon-02.svg"
                            alt=""
                          />
                        </a>
                        <a href="javascript:;" className=" me-2">
                          <img
                            src="/images/dashborad/icons/pdf-icon-03.svg"
                            alt=""
                          />
                        </a>
                        <a href="javascript:;">
                          <img
                            src="/images/dashborad/icons/pdf-icon-04.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /Table Header */}
                  <div className="table-responsive">
                    <table className="table border-0 custom-table comman-table datatable mb-0">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Clinic Name</th>
                          <th>Department</th>
                          <th>Available Days</th>
                          <th>Available Time</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <a>
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle m-r-5"
                                alt=""
                                src="/images/dashborad/profiles/avatar-01.jpg"
                                style={{
                                  display: "none",
                                  visibility: "hidden",
                                }}
                              />
                              Saint Fatima
                            </a>
                          </td>
                          <td>Cardiology</td>
                          <td>Mon - Sun</td>
                          <td>09:00 AM - 06:00 PM </td>
                          <td>
                            <button className="custom-badge status-green ">
                              Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle m-r-5"
                              alt=""
                              data-cfsrc="/images/dashborad/profiles/avatar-02.jpg"
                              style={{
                                display: "none",
                                visibility: "hidden",
                              }}
                            />
                            Shubra
                          </td>
                          <td>Urology</td>
                          <td>Mon,Tue,Sat,Sun</td>
                          <td>09:00 AM - 04:00 PM </td>
                          <td>
                            <button className="custom-badge status-green ">
                              Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />{" "}
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle m-r-5"
                              alt=""
                              data-cfsrc="/images/dashborad/profiles/avatar-03.jpg"
                              style={{
                                display: "none",
                                visibility: "hidden",
                              }}
                            />
                            90th Street
                          </td>
                          <td>Radiology</td>
                          <td>Mon,Fri</td>
                          <td>09:00 AM - 06:00 PM </td>
                          <td>
                            <button className="custom-badge status-green ">
                              Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />{" "}
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle m-r-5"
                              alt=""
                              data-cfsrc="/images/dashborad/profiles/avatar-04.jpg"
                              style={{
                                display: "none",
                                visibility: "hidden",
                              }}
                            />
                            Ain Shams
                          </td>
                          <td>Dentist</td>
                          <td>Mon - fri</td>
                          <td>010:00 AM - 05:00 PM </td>
                          <td>
                            <button className="custom-badge status-pink ">
                              In Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />{" "}
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle m-r-5"
                              alt=""
                              data-cfsrc="/images/dashborad/profiles/avatar-06.jpg"
                              style={{
                                display: "none",
                                visibility: "hidden",
                              }}
                            />
                            Heliopolis Hospital
                          </td>
                          <td>Gynocolgy</td>
                          <td>Mon - Sun</td>
                          <td>09:00 AM - 06:00 PM </td>
                          <td>
                            <button className="custom-badge status-pink ">
                              In Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />{" "}
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="profile-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle m-r-5"
                              alt=""
                              data-cfsrc="/images/dashborad/profiles/avatar-05.jpg"
                              style={{
                                display: "none",
                                visibility: "hidden",
                              }}
                            />
                            National Hospital
                          </td>
                          <td>Gynocolgy</td>
                          <td>Sat, Sun</td>
                          <td>09:00 AM - 12:00 PM </td>
                          <td>
                            <button className="custom-badge status-green ">
                              Active
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />{" "}
                                <CgMoreVerticalAlt />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="edit-schedule.html"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
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
      </div>
    </div>
  );
}

export default DoctorShedule;
