import { Link } from "react-router-dom";
import ClinicCard from "../../patient/clinics/ClinicCard";

const clinicsList = [
  {
    id: 1,
    slug: "patient-list",
    name: "Heliopolis Hospital",
    city: "Cairo",
    address: "El Hegaz St, Al Matar, El Nozha, Cairo Governorate",
    location: "Heliopolis Hospital",
    specialization: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    profilePhoto:
      "https://lh5.googleusercontent.com/p/AF1QipPopa6nUNMevGnUYIrhcu2weu-SP-C661XfNIFT=w243-h174-n-k-no-nu",
  },
  {
    id: 2,
    name: "90th Street Clinic",
    slug: "patient-list",
    city: "Cairo",
    specialization: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    address: "39 Cleopatra، Maidan Salahuddin Square, Heliopolis",
    location: "cleopatra hospital heliopolis",
    profilePhoto:
      "https://lh3.googleusercontent.com/p/AF1QipO_3Ws6r-6SA5RMKVYq0SVKhjQxKVC5wH1nG7HW=s1360-w1360-h1020",
  },
];

function ClinicsListOfDoctor() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/doctor/dashboard">Patients </Link>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Clinics List</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table show-entire">
              <div className="card-body">
                {/* /Table Header */}
                <div className="page-table-header mb-2">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="doctor-table-blk">
                        <h3>Clinics List</h3>
                        <div className="doctor-search-blk">
                          <div className="top-nav-search table-search-blk">
                            <form>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here"
                              />
                              <a className="btn">
                                <img
                                  src="/images/dashborad/icons/search-normal.svg"
                                  alt=""
                                />
                              </a>
                            </form>
                          </div>
                          <div className="add-group">
                            <a
                              href="javascript:;"
                              className="btn btn-primary doctor-refresh ms-2"
                            >
                              <img
                                src="/images/dashborad/icons/re-fresh.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="javascript:;" className=" me-2">
                        <img
                          src="/images/dashborad/icons/pdf-icon-01.svg"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className=" me-2">
                        <img
                          src="/images/dashborad/icons/pdf-icon-02.svg"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;" className=" me-2">
                        <img
                          src="/images/dashborad/icons/pdf-icon-03.svg"
                          alt=""
                        />
                      </a>
                      <a href="javascript:;">
                        <img
                          src="/images/dashborad/icons/pdf-icon-04.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Cards */}
                {clinicsList.map((clinic) => (
                  <ClinicCard clinic={clinic} key={clinic.id} />
                ))}

                {/* /Cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicsListOfDoctor;
