import { BsChatText } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { FaCalendarCheck, FaPeopleRoof, FaUserDoctor } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function DoctorSidebar() {
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink to={"/doctor/dashboard"} className="link">
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Doctor Shedule */}
      <li className="submenu">
        <NavLink to={"/doctor/doctor-shedule"} className="link">
          <span className="menu-side">
            <FaCalendarCheck />
          </span>
          <span>Doctor Shedule</span>
        </NavLink>
      </li>

      {/* Patients */}
      <li className="submenu">
        <NavLink to={"/doctor/patients"} className="link">
          <span className="menu-side">
            <FaPeopleRoof />
          </span>
          <span>Patients </span>
        </NavLink>
      </li>

      {/* Chat */}
      <li>
        <NavLink to={"/doctor/chat"} className="link">
          <span className="menu-side">
            <BsChatText />
          </span>
          <span>Chat</span>
          <span className="menu-arrow"></span>
        </NavLink>
      </li>

      {/* My Profile */}
      <li className="submenu">
        <NavLink to={"/doctor/my-profile"} className="link">
          <span className="menu-side">
            <FaUserDoctor />
          </span>
          <span> My Profile </span>
        </NavLink>
      </li>

      {/* Edit Profile */}
      <li className="submenu">
        <NavLink to={"/doctor/edit-profile"} className="link">
          <span className="menu-side">
            <FaUserEdit />
          </span>
          <span> Edit Profile </span>
        </NavLink>
      </li>
    </>
  );
}

export default DoctorSidebar;
