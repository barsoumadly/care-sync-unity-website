import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function PatientTableTuples({ patient, handleOpenModal }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <tr>
      <td></td>
      <td>
        <a>{patient.turnNumber}</a>
      </td>
      <td className="profile-image">
        <a href="profile.html">
          <img
            width={28}
            height={28}
            src={patient?.patient?.profilePhoto?.url}
            className="rounded-circle m-r-5"
            alt=""
          />{" "}
          {patient.patient.name}
        </a>
      </td>
      <td>{patient.patient?.phone}</td>
      <td>{patient.paymentType}</td>
      <td>{patient.price}</td>
      <td>{patient.specialization}</td>
      <td>{patient.createdAt.split("T")[0]}</td>
      <td>
        <div
          className={`custom-badge ${
            patient.status === "pending" ? "status-pink" : "status-green"
          } `}
        >
          {patient.status}
        </div>
      </td>
      <td>
        <div className="action-label">
          <button className="custom-badge book-btn">Examination</button>
        </div>
      </td>
      <td>
        <div className="dropdown dropdown-action">
          <Link
            to={`/clinic/edit-appointment/${patient.id}`}
            className="dropdown-item"
          >
            <button
              type="button"
              className="btn btn-primary cancel-form me-4"
              style={{ background: "rgba(51, 52, 72, 0.05)", color: "#333448" }}
            >
              <FaEdit /> Edit
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default PatientTableTuples;
