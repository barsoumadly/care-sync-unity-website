import { AiFillSchedule } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import {
  FaBriefcaseMedical,
  FaClinicMedical,
  FaUserEdit,
} from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { GiChemicalDrop, GiMedicines } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
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

      {/* Hospitals */}
      <li className="submenu">
        <NavLink to={"/patient/hospitals"} className="link">
          <span className="menu-side">
            <FaHospital />
          </span>
          <span> Hospitals </span>
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
            <IoIosPaper />
          </span>
          <span> Prescriptions </span>
        </NavLink>
      </li>

      {/* Medicines */}
      <li className="submenu">
        <NavLink to={"/patient/medicine-orders"} className="link">
          <span className="menu-side">
            <GiMedicines />
          </span>
          <span> Medicines Orders </span>
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

      {/* View Profile */}
      <li className="submenu">
        <NavLink to={"/patient/view-profile"} className="link">
          <span className="menu-side">
            <FaUserEdit />
          </span>
          <span> View Profile </span>
        </NavLink>
      </li>
    </>
  );
}

export default PatientSidebar;
