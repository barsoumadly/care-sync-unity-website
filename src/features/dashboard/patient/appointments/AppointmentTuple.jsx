import { Link } from "react-router-dom";
import useDoctor from "../clinics/useDoctor";

function AppointmentTuple({
  appointmentTuple,
  onOpenModal,
  onChangeAppointmentTurn,
}) {
  const { data: doctor } = useDoctor(appointmentTuple?.doctorId?._id);

  return (
    <>
      <tr>
        <td className="profile-image">
          <a>
            <img
              width={28}
              height={28}
              src={doctor?.userId?.profilePhoto?.url}
              className="rounded-circle m-r-5"
              alt=""
            />
            Dr. {doctor?.userId?.name}
          </a>
        </td>
        <td className="profile-image">
          <a>
            {appointmentTuple?.clinicId?.name.includes("Clinic")
              ? appointmentTuple?.clinicId?.name
              : `${appointmentTuple?.clinicId?.name} Hospital`}
          </a>
        </td>
        <td>{new Date(appointmentTuple?.scheduledAt).toLocaleDateString()}</td>
        <td>{appointmentTuple?.doctorId?.specialization}</td>
        <td>
          {appointmentTuple?.type === "examination"
            ? "Examination"
            : "Consultation"}
        </td>
        <td>{appointmentTuple?.price} EGP</td>
        <td>
          <div className="dropdown action-label">
            <a
              className={`custom-badge ${
                appointmentTuple.status === "pending"
                  ? "status-purple"
                  : appointmentTuple.status === "approved"
                  ? "status-green"
                  : appointmentTuple.status === "completed"
                  ? "status-blue"
                  : "status-pink"
              } `}
            >
              {appointmentTuple.status === "pending" && "Pending"}
              {appointmentTuple.status === "approved" && "Approved"}
              {appointmentTuple.status === "declined" && "Declined"}
              {appointmentTuple.status === "completed" && "Completed"}
            </a>
          </div>
        </td>
        {appointmentTuple.status === "approved" && (
          <td>
            <div class="dropdown action-label">
              <button
                class="custom-badge book-btn"
                onClick={() => {
                  onChangeAppointmentTurn(3);
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
