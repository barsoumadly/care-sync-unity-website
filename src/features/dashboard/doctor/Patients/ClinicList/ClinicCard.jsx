import { Link } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";

function ClinicCard({ clinic }) {
  const saveActiveClinic = function (clinic) {
    localStorage.setItem("clinic", JSON.stringify(clinic));
  };

  const { user } = useAuth();
  return (
    <div className="col-12 col-md-4 col-lg-3 d-flex">
      <div
        className="card flex-fill bg-white"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          margin: "5%",
        }}
      >
        <img
          alt="Card Image"
          src={clinic.profilePhoto}
          className="card-img-top"
          style={{ width: "100%", height: "174px" }}
        />
        <div className="card-header" style={{ padding: "5%" }}>
          <h5 className="card-title mb-0" style={{ color: "#2e37a4" }}>
            <strong>{clinic.name}</strong>
          </h5>
        </div>
        <div className="card-body card-buttons" style={{ padding: "5%" }}>
          <p className="card-text">
            <span style={{ fontWeight: "600" }}>Our phone: </span>
            {clinic?.phone}
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "600" }}>Our Address: </span>
            {clinic.address.address}, {clinic.address.city}
          </p>
          {/* <p className="card-text">
            <span style={{ fontWeight: "600" }}>Our Address: </span>
            {clinic.address}, {clinic.area}, {clinic.city}
          </p> */}
          <Link
            to={`/doctor/${clinic.name}/${clinic._id}/patient-list`}
            className="btn btn-primary"
            onClick={() => saveActiveClinic(clinic)}
          >
            View {user.role === "DOCTOR" ? "Patients" : "Profile"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
