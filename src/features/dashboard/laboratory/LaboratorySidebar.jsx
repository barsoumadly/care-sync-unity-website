import { FaUserEdit } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function LaboratorySidebar() {
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink to={"/laboratory/dashboard"} className="link">
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Medicines */}
      <li className="submenu">
        <NavLink to={"/laboratory/medicines"} className="link">
          <span className="menu-side">
            <GiMedicines />
          </span>
          <span> Analysis Tests </span>
        </NavLink>
      </li>

      {/* View Profile */}
      <li className="submenu">
        <NavLink to={"/laboratory/view-profile"} className="link">
          <span className="menu-side">
            <FaUserEdit />
          </span>
          <span> View Profile </span>
        </NavLink>
      </li>
    </>
  );
}

export default LaboratorySidebar;
