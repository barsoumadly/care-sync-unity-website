function DoctorField({ doctor, onSelectDoctor, onOpenModal }) {
  return (
    <tr>
      <td className="profile-image">
        <a href="profile.html">
          <img
            width={28}
            height={28}
            src={doctor.profilePhoto}
            className="rounded-circle m-r-5"
            alt=""
          />
          {doctor.name}
        </a>
      </td>
      <td> {doctor.specialization}</td>
      <td> {doctor.days}</td>
      <td> {doctor.time}</td>
      <td> {doctor.cost} EGP</td>
      <td>
        <div className="dropdown action-label">
          <button
            className="custom-badge book-btn"
            onClick={() => {
              onOpenModal();
              onSelectDoctor(doctor);
            }}
          >
            Book appointment
          </button>
        </div>
      </td>
    </tr>
  );
}

export default DoctorField;
