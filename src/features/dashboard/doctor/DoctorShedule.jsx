import { CgMoreVerticalAlt } from "react-icons/cg";
import SearchBar from "./SearchBar";
import DashboardPageHeader from "./DashboardPageHeader";
import Table from "./Table";

function DoctorShedule() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}

          <DashboardPageHeader
            pageList={[{ name: "Dashboard", link: "/doctor/dashboard" }]}
            currentPage="Doctor Shedule"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <SearchBar name="Schedule List" />
                  {/* /Table Header */}

                  <Table
                    headElements={[
                      "Num",
                      "Clinic Name",
                      "Specialization",
                      "Available Days",
                      "Available Time",
                      "Status",
                    ]}
                    bodyElements={[
                      [
                        "Saint Fatima",
                        "Cardiology",
                        "Mon - Sun",
                        "09:00 AM - 06:00 PM",
                      ],
                      [
                        " 90th Street",
                        "Cardiology",
                        "Mon - Fri",
                        "09:00 AM - 06:00 PM",
                      ],
                      [
                        "Saint Fatima",
                        "Cardiology",
                        "Sat - Sun",
                        "09:00 AM - 06:00 PM",
                      ],
                      [
                        "Heliopolis Hospital",
                        "Cardiology",
                        "Web - Sun",
                        "09:00 AM - 06:00 PM",
                      ],
                    ]}
                    status={[
                      { name: "Active", color: "green" },
                      { name: "In Active", color: "pink" },
                      { name: "In Active", color: "pink" },
                      { name: "Active", color: "green" },
                      { name: "In Active", color: "pink" },
                    ]}
                  />
                  {/* <div className="table-responsive">
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
                  </div> */}
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
