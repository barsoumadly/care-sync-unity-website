import { Link } from "react-router-dom";

export default function PatientTuples({ num, element, button }) {
  return (
    <>
      <td></td>

      {/* Counter */}
      <td style={{ padding: "0 20px" }}>{num + 1}</td>

      {/* Data */}
      <td>{element.patientName}</td>
      <td>{element.specialization}</td>
      <td>{element.type}</td>

      {/* Button */}
      <td className="col-6 col-md-2 col-xl-3">
        {element?.status !== "pending" && element?.status !== "approved" ? (
          <div className="dropdown action-label">
            <Link
              to={`${button.link}/${element.id}/patient-profile`}
              style={{ marginTop: "3%", color: "#fff" }}
            >
              <button className="btn btn-primary submit-list-form me-2">
                {button.name}
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </td>
    </>
  );
}
