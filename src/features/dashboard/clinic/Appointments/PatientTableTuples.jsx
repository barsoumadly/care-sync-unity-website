import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useEditAppointment from "./useEditAppointment";
import { examination } from "../../../../services/clinic";
import { useQueryClient } from "@tanstack/react-query";

function PatientTableTuples({ patient, handleOpenModal }) {
  const queryClient = useQueryClient();
  const [dropdown, setDropdown] = useState(false);
  const hanbleExamination = () => {
    examination(patient.appointmentId);
    queryClient.invalidateQueries({ queryKey: ["patientAppointmentList"] });
  };

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
            src={patient?.patient?.profilePhoto}
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
          <button className="custom-badge book-btn" onClick={hanbleExamination}>
            Examination
          </button>
        </div>
      </td>
      <td>
        <div className="dropdown dropdown-action">
          <Link
            to={`/clinic/edit-appointment/${patient.appointmentId}`}
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
