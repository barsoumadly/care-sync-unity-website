import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function ClinicCard({ clicinName = "clicin", bio, to }) {
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
          src="/images/clinic/clinic.jpg"
          className="card-img-top"
        />
        <div className="card-header" style={{ padding: "5%" }}>
          <h5 className="card-title mb-0">{clicinName}</h5>
        </div>
        <div className="card-body card-buttons" style={{ padding: "5%" }}>
          <p className="card-text">{bio}</p>
          <Link to={to} className="btn btn-primary">
            View {user.role === "DOCTOR" ? "Patients" : "Profile"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
