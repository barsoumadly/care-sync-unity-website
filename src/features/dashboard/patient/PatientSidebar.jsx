import { AiFillSchedule } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { FaClinicMedical, FaUserEdit } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function PatientSidebar() {
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink to={"/patient/dashboard"} className="link">
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Clinics */}
      <li className="submenu">
        <NavLink to={"/patient/clinics"} className="link">
          <span className="menu-side">
            <FaClinicMedical />
          </span>
          <span> Clinics </span>
        </NavLink>
      </li>

      {/* Chat */}
      <li>
        <NavLink to={"/patient/chat"} className="link">
          <span className="menu-side">
            <BsChatText />
          </span>
          <span>Chat</span>
          <span className="menu-arrow"></span>
        </NavLink>
      </li>

      {/* Appointments */}
      <li className="submenu">
        <NavLink to={"/patient/appointments"} className="link">
          <span className="menu-side">
            <AiFillSchedule />
          </span>
          <span> Appointments </span>
        </NavLink>
      </li>

      {/* Edit Profile */}
      <li className="submenu">
        <NavLink to={"/patient/edit-profile"} className="link">
          <span className="menu-side">
            <FaUserEdit />
          </span>
          <span> Edit Profile </span>
        </NavLink>
      </li>
    </>
  );
}

export default PatientSidebar;
