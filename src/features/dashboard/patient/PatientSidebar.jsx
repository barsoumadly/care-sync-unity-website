import { AiFillSchedule } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import {
  FaBriefcaseMedical,
  FaClinicMedical,
  FaUserEdit,
} from "react-icons/fa";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
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

      {/* Pharmacies */}
      <li className="submenu">
        <NavLink to={"/patient/pharmacies"} className="link">
          <span className="menu-side">
            <FaBriefcaseMedical />
          </span>
          <span> Pharmacies </span>
        </NavLink>
      </li>

      {/* laboratories */}
      <li className="submenu">
        <NavLink to={"/patient/laboratories"} className="link">
          <span className="menu-side">
            <GiChemicalDrop />
          </span>
          <span> Laboratories </span>
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

      {/* Prescriptions */}
      <li className="submenu">
        <NavLink to={"/patient/prescriptions"} className="link">
          <span className="menu-side">
            <FaPrescriptionBottleMedical />
          </span>
          <span> Prescriptions </span>
        </NavLink>
      </li>

      {/* Analysis Results */}
      <li className="submenu">
        <NavLink to={"/patient/analysis-results"} className="link">
          <span className="menu-side">
            <SiGoogleanalytics />
          </span>
          <span> Analysis Results </span>
        </NavLink>
      </li>

      {/* Chat */}
      <li className="submenu">
        <NavLink to={"/patient/chat"} className="link">
          <span className="menu-side">
            <BsChatText />
          </span>
          <span>Chat</span>
          <span className="menu-arrow"></span>
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
