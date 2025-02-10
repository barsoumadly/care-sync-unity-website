import { Link } from "react-router-dom";

function ClinicCard() {
  return (
    <div className="row">
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
            <h5 className="card-title mb-0">Heliopolis Hospital</h5>
          </div>
          <div className="card-body card-buttons" style={{ padding: "5%" }}>
            <p className="card-text">
              Our Specialization: cardiology, neurology, oncology, orthopedics,
              etc.
            </p>
            <Link to="clinic-profile" className="btn btn-primary">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
