import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function AppointmentTableTuples({ doctor, handleOpenModal }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <tr>
      <td></td>
      <td className="profile-image">
        <Link to={`/clinic/${doctor.name}/${doctor.doctorId}`}>
          <img
            width={28}
            height={28}
            src={doctor.image}
            className="rounded-circle m-r-5"
            alt=""
          />{" "}
          {doctor.name}
        </Link>
      </td>

      <td>{doctor.specialization}</td>

      <td style={{ padding: "15px 100px" }}>{doctor.appointmentCount}</td>

      <td>
        {doctor.workingDays.map((day) => (
          <div
            className={`custom-badge status-pink`}
            style={{ marginLeft: "2px", minWidth: "0" }}
          >
            {`${day?.day ? day?.day : "-"}`}
          </div>
        ))}
      </td>

      {/* <td className="text-end">
        <div className="dropdown dropdown-action">
          <a
            className="action-icon dropdown-toggle"
            onClick={() => setDropdown((dropdown) => !dropdown)}
          >
            <CgMoreVerticalAlt />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end"
            style={{
              display: `${dropdown ? "block" : "none"}`,
            }}
          >
            <Link to="/clinic/edit-profile-Doc" className="dropdown-item">
              <FaEdit /> Edit
            </Link>
            <button
              className="dropdown-item"
              onClick={() => {
                handleOpenModal(doctor.id);
                setDropdown((dropdown) => !dropdown);
              }}
            >
              <RiDeleteBin6Fill /> Delete
            </button>
          </div>
        </div>
      </td> */}
    </tr>
  );
}

export default AppointmentTableTuples;
