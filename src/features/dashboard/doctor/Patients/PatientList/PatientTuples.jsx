import { Link, useNavigate } from "react-router-dom";

const statusColor = {
  declined: "status-pink",
  approved: "status-green",
  rejected: "status-red",
  completed: "status-blue",
  pending: "status-orange",
  examining: "status-purple",
};

export default function PatientTuples({ num, element, button }) {
  const navigate = useNavigate();
  function handleButton(e) {
    navigate(
      `${button.link}/${element.patientId}/patient-profile/${element._id}`,
      { state: element?.specialization }
    );
  }
  return (
    <>
      <td></td>
      <td style={{ padding: "0 20px" }}>{num + 1}</td>
      <td>
        {element.guestName !== "Unknown"
          ? element.guestName
          : element.patientName}
      </td>
      <td>{element.specialization}</td>
      <td>{element.type}</td>
      <td>{new Date(element.scheduledAt).toLocaleDateString()}</td>
      <td>
        <button
          className={`custom-badge ${
            statusColor[element.status] || "status-orange"
          }`}
        >
          {element.status}
        </button>
      </td>

      {/* Button */}
      <td className="col-6 col-md-2 col-xl-3">
        {element?.status === "examining" ? (
          element?.patientGender === "Unknown" ? (
            <td>
              <a className="custom-badge status-red">No account</a>
            </td>
          ) : (
            <a className="dropdown action-label">
              <a
                className="btn btn-primary submit-list-form me-2"
                onClick={handleButton}
              >
                {button.name}
              </a>
            </a>
          )
        ) : null}
      </td>
    </>
  );
}
