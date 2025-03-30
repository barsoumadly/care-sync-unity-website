import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import useUser from "../../useUser";

function ClinicCard({ clinic }) {
  const { user } = useAuth();
  const { data: clinicUser } = useUser(clinic.adminId);

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
          src={clinicUser?.profilePhoto?.url}
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
            {/* <span style={{ fontWeight: "600" }}>Our Specialization: </span> */}
            {/* {clinic.specialization.join(", ")} */}
          </p>
          <Link
            to={`${user.role === "DOCTOR" ? "/doctor/" : "/patient/clinics/"}${
              clinic.slug
            }/${clinic._id}`}
            className="btn btn-primary"
          >
            View {user.role === "DOCTOR" ? "Patients" : "Profile"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
