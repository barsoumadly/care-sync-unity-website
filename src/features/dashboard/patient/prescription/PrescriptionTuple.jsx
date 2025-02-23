import { Link } from "react-router-dom";

function PrescriptionTuple({ prescriptionTuple }) {
  const saveActivePrescription = function (prescription) {
    localStorage.setItem("prescription", JSON.stringify(prescription));
  };

  const doctorSlug = prescriptionTuple.doctor.name
    .toLowerCase()
    .split(" ")
    .join("-");
  const clinicSlug = prescriptionTuple.clinicName
    .toLowerCase()
    .split(" ")
    .join("-");

  return (
    <>
      <tr>
        <td className="profile-image">
          <Link to={`/patient/${doctorSlug}/profile`} target="blank">
            <img
              width={28}
              height={28}
              src={prescriptionTuple.doctor.profilePhoto}
              className="rounded-circle m-r-5"
              alt=""
            />
            {prescriptionTuple.doctor.name}
          </Link>
        </td>
        <td className="profile-image">
          <Link to={`/patient/clinics/${clinicSlug}`} target="blank">
            {prescriptionTuple.clinicName}
          </Link>
        </td>
        <td>{prescriptionTuple.doctor.specialization}</td>
        <td>{prescriptionTuple.date}</td>

        <td>
          <div class="dropdown action-label">
            <Link
              to={`/patient/prescription/${prescriptionTuple.id}`}
              target="blank"
              class="custom-badge book-btn"
              onClick={() => saveActivePrescription(prescriptionTuple)}
            >
              Show Prescription
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}

export default PrescriptionTuple;
