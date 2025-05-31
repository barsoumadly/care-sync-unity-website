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

      {/* Counter */}
      <td style={{ padding: "0 20px" }}>{num + 1}</td>

      {/* Data */}
      <td>
        {element.guestName !== "Unknown"
          ? element.guestName
          : element.patientName}
      </td>
      <td>{element.specialization}</td>
      <td>{element.type}</td>
      <td>{new Date(element.scheduledAt).toLocaleDateString()}</td>
      <td>
        <div
          className={`custom-badge ${
            statusColor[element.status] || "status-orange"
          }`}
        >
          {element.status}
        </div>
      </td>

      {/* Button */}
      <td className="col-6 col-md-2 col-xl-3">
        {element?.status === "examining" ? (
          element?.patientGender === "Unknown" ? (
            <td>
              <div className="custom-badge status-red">No account</div>
            </td>
          ) : (
            <div className="dropdown action-label">
              <button
                className="btn btn-primary submit-list-form me-2"
                onClick={handleButton}
              >
                {button.name}
              </button>
            </div>
          )
        ) : (
          ""
        )}
      </td>
    </>
  );
}
