import { Link } from "react-router-dom";

function AppointmentTupleDashboard({ appointmentTuple }) {
  const doctorSlug = appointmentTuple.doctor.name
    .toLowerCase()
    .split(" ")
    .join("-");
  const clinicSlug = appointmentTuple.clinicName
    .toLowerCase()
    .split(" ")
    .join("-");

  return (
    <>
      <tr>
        <td className="profile-image">
          <Link to={`/patient/${doctorSlug}/profile`}>
            <img
              width={28}
              height={28}
              src={appointmentTuple.doctor.profilePhoto}
              className="rounded-circle m-r-5"
              alt=""
            />
            {appointmentTuple.doctor.name}
          </Link>
        </td>
        <td className="profile-image">
          <Link to={`/patient/clinics/${clinicSlug}`}>
            {appointmentTuple.clinicName}
          </Link>
        </td>
        <td>{appointmentTuple.date}</td>
        <td>{appointmentTuple.doctor.specialization}</td>
        <td>
          <div className="dropdown action-label">
            <a
              className={`custom-badge ${
                appointmentTuple.status === "pending"
                  ? "status-purple"
                  : appointmentTuple.status === "approved"
                  ? "status-green"
                  : appointmentTuple.status === "examined"
                  ? "status-blue"
                  : "status-pink"
              } `}
            >
              {appointmentTuple.status === "pending" && "Pending"}
              {appointmentTuple.status === "approved" && "Approved"}
              {appointmentTuple.status === "declined" && "Declined"}
              {appointmentTuple.status === "examined" && "Examined"}
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}

export default AppointmentTupleDashboard;
