import useDoctor from "../clinics/useDoctor";

function AppointmentTupleDashboard({ appointmentTuple }) {
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
          <div className="dropdown action-label">
            <a
              className={`custom-badge ${
                appointmentTuple.status === "pending"
                  ? "status-orange"
                  : appointmentTuple.status === "approved"
                  ? "status-green"
                  : appointmentTuple.status === "completed"
                  ? "status-blue"
                  : appointmentTuple.status === "examining"
                  ? "status-purple"
                  : "status-pink"
              } `}
            >
              {appointmentTuple.status === "pending" && "Pending"}
              {appointmentTuple.status === "approved" && "Approved"}
              {appointmentTuple.status === "examining" && "Examining"}
              {appointmentTuple.status === "declined" && "Declined"}
              {appointmentTuple.status === "completed" && "Completed"}
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}

export default AppointmentTupleDashboard;
