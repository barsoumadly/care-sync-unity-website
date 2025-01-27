import { NavLink } from "react-router-dom";

function Sidebar({ minbar, showbar, children }) {
  return (
    <div className={minbar ? "mini-sidebar" : ""}>
      <div
        className="sidebar"
        id="sidebar"
        style={{ marginLeft: `${showbar ? "0px" : "-225px"}` }}
      >
        <div className="sidebar-inner slimscroll scroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              {children}
            </ul>
            <div className="logout-btn">
              <NavLink to={"/login"} className="link">
                <span className="menu-side">
                  <img src="/images/dashborad/icons/logout.svg" alt="" />
                </span>{" "}
                <span>Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

{
  /* <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <MdDashboard />
                  </span>{" "}
                  <span> Dashboard </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="index.html">Admin Dashboard</a>
                  </li>
                  <li>
                    <a href="doctor-dashboard.html">Doctor Dashboard</a>
                  </li>
                  <li>
                    <a href="patient-dashboard.html">Patient Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <FaUserDoctor />
                  </span>{" "}
                  <span> Doctors </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="doctors.html">Doctor List</a>
                  </li>
                  <li>
                    <a href="add-doctor.html">Add Doctor</a>
                  </li>
                  <li>
                    <a href="edit-doctor.html">Edit Doctor</a>
                  </li>
                  <li>
                    <a className="active" href="doctor-profile.html">
                      Doctor Profile
                    </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <FaPeopleRoof />
                  </span>{" "}
                  <span>Patients </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="patients.html">Patients List</a>
                  </li>
                  <li>
                    <a href="add-patient.html">Add Patients</a>
                  </li>
                  <li>
                    <a href="edit-patient.html">Edit Patients</a>
                  </li>
                  <li>
                    <a href="patient-profile.html">Patients Profile</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <ImUserTie />
                  </span>{" "}
                  <span> Staff </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="staff-list.html">Staff List</a>
                  </li>
                  <li>
                    <a href="add-staff.html">Add Staff</a>
                  </li>
                  <li>
                    <a href="staff-profile.html">Staff Profile</a>
                  </li>
                  <li>
                    <a href="staff-leave.html">Leaves</a>
                  </li>
                  <li>
                    <a href="staff-holiday.html">Holidays</a>
                  </li>
                  <li>
                    <a href="staff-attendance.html">Attendance</a>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <AiFillSchedule />
                  </span>{" "}
                  <span> Appointments </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="appointments.html">Appointment List</a>
                  </li>
                  <li>
                    <a href="add-appointment.html">Book Appointment</a>
                  </li>
                  <li>
                    <a href="edit-appointment.html">Edit Appointment</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <GrSchedules />
                  </span>{" "}
                  <span> Doctor Schedule </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="schedule.html">Schedule List</a>
                  </li>
                  <li>
                    <a href="add-schedule.html">Add Schedule</a>
                  </li>
                  <li>
                    <a href="edit-schedule.html">Edit Schedule</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-06.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Departments </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="departments.html">Department List</a>
                  </li>
                  <li>
                    <a href="add-department.html">Add Department</a>
                  </li>
                  <li>
                    <a href="edit-department.html">Edit Department</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-07.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Accounts </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                  <li>
                    <a href="provident-fund.html">Provident Fund</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-09.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Payroll </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <span className="menu-side">
                    <BsChatText />
                  </span>{" "}
                  <span>Chat</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-11.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Calls</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li>
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li>
                    <a href="incoming-call.html">Incoming Call</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-12.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Email</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="compose.html">Compose Mail</a>
                  </li>
                  <li>
                    <a href="inbox.html">Inbox</a>
                  </li>
                  <li>
                    <a href="mail-view.html">Mail View</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-13.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Blog</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog View</a>
                  </li>
                  <li>
                    <a href="add-blog.html">Add Blog</a>
                  </li>
                  <li>
                    <a href="edit-blog.html">Edit Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="assets.html">
                  <i className="fa fa-cube" /> <span>Assets</span>
                </a>
              </li>
              <li>
                <a href="activities.html">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-14.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span>Activities</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-flag" /> <span> Reports </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-reports.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-reports.html"> Invoice Report </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-15.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> Invoice </span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoices-list.html"> Invoices List </a>
                  </li>
                  <li>
                    <a href="invoices-grid.html"> Invoices Grid</a>
                  </li>
                  <li>
                    <a href="add-invoice.html"> Add Invoices</a>
                  </li>
                  <li>
                    <a href="edit-invoices.html"> Edit Invoices</a>
                  </li>
                  <li>
                    <a href="view-invoice.html"> Invoices Details</a>
                  </li>
                  <li>
                    <a href="invoices-settings.html"> Invoices Settings</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="settings.html">
                  <span className="menu-side">
                    <img
                      src="/images/dashborad/icons/menu-icon-16.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span>Settings</span>
                </a>
              </li>
              <li className="menu-title">UI Interface</li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-laptop" /> <span> Base UI</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="avatar.html">Avatar</a>
                  </li>
                  <li>
                    <a href="badges.html">Badges</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="buttongroup.html">Button Group</a>
                  </li>
                  <li>
                    <a href="breadcrumbs.html">Breadcrumb</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="dropdowns.html">Dropdowns</a>
                  </li>
                  <li>
                    <a href="grid.html">Grid</a>
                  </li>
                  <li>
                    <a href="images.html">Images</a>
                  </li>
                  <li>
                    <a href="lightbox.html">Lightbox</a>
                  </li>
                  <li>
                    <a href="media.html">Media</a>
                  </li>
                  <li>
                    <a href="modal.html">Modals</a>
                  </li>
                  <li>
                    <a href="offcanvas.html">Offcanvas</a>
                  </li>
                  <li>
                    <a href="pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="progress.html">Progress Bars</a>
                  </li>
                  <li>
                    <a href="placeholders.html">Placeholders</a>
                  </li>
                  <li>
                    <a href="rangeslider.html">Range Slider</a>
                  </li>
                  <li>
                    <a href="spinners.html">Spinner</a>
                  </li>
                  <li>
                    <a href="sweetalerts.html">Sweet Alerts</a>
                  </li>
                  <li>
                    <a href="tab.html">Tabs</a>
                  </li>
                  <li>
                    <a href="toastr.html">Toasts</a>
                  </li>
                  <li>
                    <a href="tooltip.html">Tooltip</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="video.html">Video</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-box" /> <span> Elements</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="ribbon.html">Ribbon</a>
                  </li>
                  <li>
                    <a href="clipboard.html">Clipboard</a>
                  </li>
                  <li>
                    <a href="drag-drop.html">Drag &amp; Drop</a>
                  </li>
                  <li>
                    <a href="rating.html">Rating</a>
                  </li>
                  <li>
                    <a href="text-editor.html">Text Editor</a>
                  </li>
                  <li>
                    <a href="counter.html">Counter</a>
                  </li>
                  <li>
                    <a href="scrollbar.html">Scrollbar</a>
                  </li>
                  <li>
                    <a href="notification.html">Notification</a>
                  </li>
                  <li>
                    <a href="stickynote.html">Sticky Note</a>
                  </li>
                  <li>
                    <a href="timeline.html">Timeline</a>
                  </li>
                  <li>
                    <a href="horizontal-timeline.html">Horizontal Timeline</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Form Wizard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-chart-simple" /> <span>Charts</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="chart-apex.html">Apex Charts</a>
                  </li>
                  <li>
                    <a href="chart-js.html">Chart Js</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris Charts</a>
                  </li>
                  <li>
                    <a href="chart-flot.html">Flot Charts</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity Charts</a>
                  </li>
                  <li>
                    <a href="chart-c3.html">C3 Charts</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-award" /> <span>Icons</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="icon-fontawesome.html">Fontawesome Icons</a>
                  </li>
                  <li>
                    <a href="icon-feather.html">Feather Icons</a>
                  </li>
                  <li>
                    <a href="icon-ionic.html">Ionic Icons</a>
                  </li>
                  <li>
                    <a href="icon-material.html">Material Icons</a>
                  </li>
                  <li>
                    <a href="icon-pe7.html">Pe7 Icons</a>
                  </li>
                  <li>
                    <a href="icon-simpleline.html">Simpleline Icons</a>
                  </li>
                  <li>
                    <a href="icon-themify.html">Themify Icons</a>
                  </li>
                  <li>
                    <a href="icon-weather.html">Weather Icons</a>
                  </li>
                  <li>
                    <a href="icon-typicon.html">Typicon Icons</a>
                  </li>
                  <li>
                    <a href="icon-flag.html">Flag Icons</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-edit" /> <span> Forms</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs</a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups</a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form</a>
                  </li>
                  <li>
                    <a href="form-vertical.html">Vertical Form</a>
                  </li>
                  <li>
                    <a href="form-mask.html">Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validation </a>
                  </li>
                  <li>
                    <a href="form-select2.html">Form Select2 </a>
                  </li>
                  <li>
                    <a href="form-fileupload.html">File Upload </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-table" /> <span> Tables</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables</a>
                  </li>
                  <li>
                    <a href="tables-datatables.html">Data Table</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="calendar.html">
                  <i className="fa fa-calendar" /> <span>Calendar</span>
                </a>
              </li>
              <li className="menu-title">Extras</li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-columns" /> <span>Pages</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="change-password2.html"> Change Password </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                  <li>
                    <a href="profile.html"> Profile </a>
                  </li>
                  <li>
                    <a href="gallery.html"> Gallery </a>
                  </li>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="fa fa-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow">
                    <IoIosArrowForward />
                  </span>
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <span>Level 1</span>{" "}
                      <span className="menu-arrow">
                        <IoIosArrowForward />
                      </span>
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span>{" "}
                          <span className="menu-arrow">
                            <IoIosArrowForward />
                          </span>
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>*/
}
