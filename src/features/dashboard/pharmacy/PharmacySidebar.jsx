import { FaUserEdit } from "react-icons/fa";
import { GiMedicinePills, GiMedicines } from "react-icons/gi";
import { MdAddCircleOutline, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function PharmacySidbar() {
  return (
    <>
      {/* Dashboard */}
      <li className="submenu">
        <NavLink to={"/pharmacy/dashboard"} className="link">
          <span className="menu-side">
            <MdDashboard />
          </span>
          <span> Dashboard </span>
        </NavLink>
      </li>

      {/* Medicines */}
      <li className="submenu">
        <NavLink to={"/pharmacy/medicines"} className="link">
          <span className="menu-side">
            <GiMedicines />
          </span>
          <span> Medicines </span>
        </NavLink>
      </li>

      {/* Add Medicine */}
      <li className="submenu">
        <NavLink to={"/pharmacy/add-medicine"} className="link">
          <span className="menu-side">
            <MdAddCircleOutline />
          </span>
          <span> Add Medicine </span>
        </NavLink>
      </li>

      {/* Orders */}
      <li className="submenu">
        <NavLink to={"/pharmacy/medicine-orders"} className="link">
          <span className="menu-side">
            <GiMedicinePills />
          </span>
          <span> Medicine Orders </span>
        </NavLink>
      </li>

      {/* View Profile */}
      <li className="submenu">
        <NavLink to={"/pharmacy/view-profile"} className="link">
          <span className="menu-side">
            <FaUserEdit />
          </span>
          <span> View Profile </span>
        </NavLink>
      </li>
    </>
  );
}

export default PharmacySidbar;
