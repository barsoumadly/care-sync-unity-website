import { Link } from "react-router-dom";

function ClinicsList() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Clinics </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Clinic List</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Cards */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="card flex-fill bg-white">
              <img
                alt="Card Image"
                src="/images/clinic/clinic.jpg"
                className="card-img-top"
              />
              <div className="card-header">
                <h5 className="card-title mb-0">Heliopolis Hospital</h5>
              </div>
              <div className="card-body card-buttons">
                <p className="card-text">
                  Our Specialization: cardiology, neurology, oncology,
                  orthopedics, etc.
                </p>
                <Link to="clinic-profile" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Cards */}
      </div>
    </div>
  );
}

export default ClinicsList;
