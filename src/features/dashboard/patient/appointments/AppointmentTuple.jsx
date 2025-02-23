import { Link } from "react-router-dom";

function AppointmentTuple({
  appointmentTuple,
  onOpenModal,
  onChangeAppointmentTurn,
}) {
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
        <td>{appointmentTuple.cost} EGP</td>
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
        {appointmentTuple.status === "approved" && (
          <td>
            <div class="dropdown action-label">
              <button
                class="custom-badge book-btn"
                onClick={() => {
                  onChangeAppointmentTurn(appointmentTuple.turn);
                  onOpenModal();
                }}
              >
                Show Turn
              </button>
            </div>
          </td>
        )}
      </tr>
    </>
  );
}

export default AppointmentTuple;
