import { Link } from "react-router-dom";
import ClinicCard from "./ClinicCard";
import SearchBar from "../../SearchBar";
import DashboardPageHeader from "../../DashboardPageHeader";

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
      "https://images.healtheg.com//Images/1083/Screenshot_406726dbd-ce15-47e3-80f6-94b505799cd2.jpg",
  },
  {
    id: 2,
    name: "Saint Fatima Clinic",
    slug: "patient-list",
    city: "Cairo",
    specialization: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    address: "39 Cleopatra، Maidan Salahuddin Square, Heliopolis",
    location: "cleopatra hospital heliopolis",
    profilePhoto:
      "https://www.propertyfinder.eg/property/0950c88b5b59f351c851b15004d019fe/668/452/MODE/a0733d/6554889-f5709o.jpg?ctr=eg",
  },
];

function ClinicsListOfDoctor() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <DashboardPageHeader
          pageList={[{ name: "Patients", link: "/doctor/dashboard" }]}
          currentPage="Clinic List"
        />
        {/* /Page Header */}

        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table show-entire">
              <SearchBar name="Clinics List" />
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
