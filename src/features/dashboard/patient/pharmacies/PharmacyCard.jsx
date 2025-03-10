import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import useUser from "../../useUser";

function PharmacyCard({ pharmacy }) {
  const { user } = useAuth();
  const { data: pharmacyUser } = useUser(pharmacy.userId);

  const saveActivePharmacy = function (pharmacy) {
    localStorage.setItem("pharmacy", JSON.stringify(pharmacy));
  };

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
          alt={pharmacy.name}
          src={pharmacyUser?.profilePhoto?.url}
          className="card-img-top"
          style={{ width: "260px", height: "194px" }}
        />
        <div className="card-header" style={{ padding: "5%" }}>
          <h5 className="card-title mb-0">{pharmacy.name} Pharmacy</h5>
        </div>
        <div className="card-body card-buttons" style={{ padding: "5%" }}>
          <Link
            to={`/patient/pharmacies/${pharmacy.slug}`}
            className="btn btn-primary"
            onClick={() => saveActivePharmacy(pharmacy)}
            target="blank"
          >
            View {user.role === "DOCTOR" ? "Patients" : "Profile"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PharmacyCard;
