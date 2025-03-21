import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function PatientTableTuples({ patient, handleOpenModal }) {
  const [WaitingList, isWaitingList] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  return (
    <tr key={patient.id}>
      <td>
        <div className="form-check check-tables">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue="something"
          />
        </div>
      </td>
      <td>
        <a href="invoice-view.html">{patient.turn}</a>
      </td>
      <td className="profile-image">
        <a href="profile.html">
          <img
            width={28}
            height={28}
            src={patient.image}
            className="rounded-circle m-r-5"
            alt=""
          />{" "}
          {patient.name}
        </a>
      </td>
      <td>{patient.paymentType}</td>
      {/*  <td>01.10.2022</td>
                        <td>$2450</td> */}
      <td>
        <button
          className={`custom-badge ${
            WaitingList ? "status-pink" : "status-green"
          } `}
          onClick={() => isWaitingList((done) => !done)}
        >
          {WaitingList ? patient.trueStatus : patient.falseStatus}
        </button>
      </td>
      <td>
        <div className="action-label">
          <button className="custom-badge book-btn">Examination</button>
        </div>
      </td>
      <td className="text-end">
        <div className="dropdown dropdown-action">
          <Link
            to={`/clinic/edit-appointment/${patient.id}`}
            className="dropdown-item"
          >
            <FaEdit /> Edit
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default PatientTableTuples;
