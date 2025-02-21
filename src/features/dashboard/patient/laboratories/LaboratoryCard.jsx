import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

function LaboratoryCard({ laboratoryName, to }) {
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
          src="https://lh3.googleusercontent.com/p/AF1QipNCM2ymcmttFz5-YmrUyMwNQwfN70YkJ0jFsWUZ=s1360-w1360-h1020"
          className="card-img-top"
        />
        <div className="card-header" style={{ padding: "5%" }}>
          <h5 className="card-title mb-0">{laboratoryName}</h5>
        </div>
        <div className="card-body card-buttons" style={{ padding: "5%" }}>
          <Link to={to} className="btn btn-primary">
            View {user.role === "DOCTOR" ? "Patients" : "Profile"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaboratoryCard;
