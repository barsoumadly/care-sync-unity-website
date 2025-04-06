import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { examination } from "../../../../services/clinic";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../../context/AuthContext";

function PatientTableTuples({ patient }) {
  const { user } = useAuth();

  const queryClient = useQueryClient();
  const [dropdown, setDropdown] = useState(false);
  const hanbleExamination = () => {
    examination(
      patient.appointmentId,
      patient.status === "pending"
        ? "approved"
        : patient.status === "approved"
        ? "examining"
        : "completed"
    );
    queryClient.invalidateQueries({ queryKey: ["patientAppointmentList"] });
  };

  return (
    <tr>
      <td></td>
      <td>
        <a>{patient.turnNumber}</a>
      </td>
      <td className="profile-image">
        <a>
          <img
            width={28}
            height={28}
            src={patient?.patient?.profilePhoto}
            className="rounded-circle m-r-5"
            alt=""
          />{" "}
          {patient.patient.name === user?.name
            ? patient.guestName
            : patient.patient.name}
        </a>
      </td>
      <td>{patient.patient?.phone}</td>
      <td>{patient.paymentType}</td>
      <td>{patient.price}</td>
      <td>{patient.specialization}</td>
      <td>{patient.type}</td>
      <td>{new Date(patient.scheduledAt).toLocaleDateString()}</td>
      <td>
        <div
          className={`custom-badge ${
            patient.status === "pending"
              ? "status-orange"
              : patient.status === "approved"
              ? "status-green"
              : patient.status === "examining"
              ? "status-purple"
              : "status-blue"
          } `}
        >
          {patient.status}
        </div>
      </td>
      <td>
        <div className="action-label">
          {patient.status !== "completed" && patient.status !== "examining" && (
            <button
              className="custom-badge book-btn"
              onClick={hanbleExamination}
            >
              {patient.status === "pending"
                ? "Approve"
                : patient.status === "approved"
                ? "Examination"
                : "Completed"}
            </button>
          )}
        </div>
      </td>
      <td>
        {patient.status !== "completed" && (
          <div className="dropdown dropdown-action">
            <Link
              to={`/clinic/edit-appointment/${patient.appointmentId}`}
              className="dropdown-item"
            >
              <button
                type="button"
                className="btn btn-primary cancel-form me-4"
                style={{
                  background: "rgba(51, 52, 72, 0.05)",
                  color: "#333448",
                }}
              >
                <FaEdit /> Edit
              </button>
            </Link>
          </div>
        )}
      </td>
    </tr>
  );
}

export default PatientTableTuples;
