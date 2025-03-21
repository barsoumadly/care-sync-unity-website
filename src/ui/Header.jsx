import { Link, NavLink } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
import { FaCalendarDays } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Header({ setShowbar, setMinbar, url }) {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);
  const { isProfileCompleted } = useAuth();
  
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <NavLink to={"/"}>
            <img
              src="/images/logo/care-sync-unity-logo.png"
              width="190"
              height="50"
              alt=""
            />
          </NavLink>
        </div>
      </div>

      {isProfileCompleted && (
        <>
          <div id="toggle_btn" onClick={() => setMinbar((min) => !min)}>
            <img src="/images/dashborad/icons/bar-icon.svg" alt="" />
          </div>
          <div
            className="mobile_btn float-start"
            onClick={() => setShowbar((show) => !show)}>
            <img src="/images/dashborad/icons/bar-icon.svg" alt="" />
          </div>{" "}
        </>
      )}

      <div className="top-nav-search mob-view">
        <div
          className="form-control"
          style={{
            background:
              "linear-gradient(0deg, rgba(51, 53, 72, 0.05), rgba(51, 53, 72, 0.05)), #ffffff",
            marginTop: "13px",
            position: "relative",
            width: "120%",
            padding: "10px 15px 10px 15px",
            borderRadius: "50px",
          }}>
          <div style={{ fontSize: "16px", color: " #2e37a4" }}>
            <FaCalendarDays />
            <span style={{ marginLeft: "10%", fontWeight: "600" }}>
              {new Date().toDateString()}
            </span>
          </div>
        </div>
      </div>

      <ul className="nav user-menu float-end">
        <div className="top-nav-search mob-view"></div>
        {isProfileCompleted && (
          <>
            {" "}
            <li 
            onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
            className="nav-item dropdown d-none d-md-block">
              <a
                
                href="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown">
                  <img src="/images/dashborad/icons/note-icon-01.svg" alt="" />
                
                <span className="pulse"></span>
              </a>
              <div
                className={`dropdown-menu notifications
                ${dropdownOpen ? "show" : ""}`}>
                <div className="topnav-dropdown-header">
                  <span>Notifications</span>
                </div>
                <div className="drop-scroll">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt="John Doe"
                              src="/images/dashborad/user.jpg"
                              className="img-fluid"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added
                              new task
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">V</span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Tarah Shropshire
                              </span>
                              changed the task name
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">L</span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>{" "}
                              added
                              <span className="noti-title">
                                Domenic Houston
                              </span>
                              and{" "}
                              <span className="noti-title">Claire Mapes</span>
                              to project
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">G</span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>
                              completed task
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">V</span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Bernardo Galaviz
                              </span>
                              added new task
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                2 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html">View all Notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-md-block">
              <a id="open_msg_box" className="hasnotifications nav-link">
              <img src="/images/dashborad/icons/note-icon-02.svg" alt="" />
                <span className="pulse"></span>
              </a>
            </li>
          </>
        )}
        <li className="nav-item dropdown has-arrow user-profile-list">
          <Link
            to="view-profile"
            className="dropdown-toggle nav-link user-link"
            data-bs-toggle="dropdown">
            <UserAvatar />
          </Link>
        </li>
        {isProfileCompleted && (
          <li className="nav-item ">
            <Link to="edit-profile" className="hasnotifications nav-link">
              <img src="/images/dashborad/icons/setting-icon-01.svg" alt="" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
