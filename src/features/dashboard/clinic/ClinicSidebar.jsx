import { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { FaFlag, FaGear, FaUserDoctor } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ClinicSidebar({ minbar, setShowbar }) {
  const [toggle, setToggle] = useState(0);
  const handleClick = () => {
    setShowbar((show) => !show);
  };
  function hanbleClick(index) {
    if (toggle !== index) {
      setToggle(index);
    } else {
      setToggle(0);
    }
  }
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink
          to={"/clinic/dashboard"}
          className="link"
          onClick={() => {
            hanbleClick(0);
            handleClick();
          }}
        >
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Doctors */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(1)}>
          <span className="menu-side">
            <FaUserDoctor />
          </span>
          <span> Doctors </span>
          <span className="menu-arrow">
            {toggle === 1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 1 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink
              to={"/clinic/doctor-list"}
              className="link"
              onClick={handleClick}
            >
              Doctor List
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clinic/add-doctor"}
              className="link"
              onClick={handleClick}
            >
              Add Doctor
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Staff */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(3)}>
          <span className="menu-side">
            <ImUserTie />
          </span>
          <span> Staff </span>
          <span className="menu-arrow">
            {toggle === 3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 3 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink
              to={"/clinic/employee-salary"}
              className="link"
              onClick={handleClick}
            >
              Employee salary
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clinic/add-staff"}
              className="link"
              onClick={handleClick}
            >
              Add Staff
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clinic/attendance"}
              className="link"
              onClick={handleClick}
            >
              Attendance
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Appointments */}
      <li className="submenu">
        <a className="link" onClick={() => hanbleClick(4)}>
          <span className="menu-side">
            <AiFillSchedule />
          </span>
          <span> Appointments </span>
          <span className="menu-arrow">
            {toggle === 4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        </a>
        <ul
          style={{
            display: `${toggle === 4 && !minbar ? "block" : "none"}`,
          }}
        >
          <li>
            <NavLink
              to={"/clinic/appointment-list"}
              className="link"
              onClick={handleClick}
            >
              Appointment List
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clinic/book-appointment"}
              className="link"
              onClick={handleClick}
            >
              Book Appointment
            </NavLink>
          </li>
        </ul>
      </li>
      {/* Chat */}
      <li>
        <NavLink
          to={"/clinic/chat"}
          className="link"
          onClick={() => {
            hanbleClick(0);
            handleClick();
          }}
        >
          <span className="menu-side">
            <BsChatText />
          </span>
          <span>Chat</span>
          <span className="menu-arrow"></span>
        </NavLink>
      </li>
      {/* Reports */}
      <li className="submenu">
        <NavLink
          to={"/clinic/reports"}
          className="link"
          onClick={() => {
            hanbleClick(0);
            handleClick();
          }}
        >
          <span className="menu-side">
            <FaFlag />
          </span>
          <span> Reports </span>
        </NavLink>
      </li>
      {/* Edit Profile */}
      <li>
        <NavLink
          to={"/clinic/edit-profile"}
          className="link"
          onClick={() => {
            hanbleClick(0);
            handleClick();
          }}
        >
          <span className="menu-side">
            <FaGear />
          </span>
          <span>Edit Profile</span>
          <span className="menu-arrow"></span>
        </NavLink>
      </li>
    </>
  );
}

export default ClinicSidebar;
