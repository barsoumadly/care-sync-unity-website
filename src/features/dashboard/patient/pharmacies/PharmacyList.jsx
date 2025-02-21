import PharmacyCard from "./PharmacyCard";

const pharmaciesList = [
  {
    id: 1,
    name: "El Ezaby Pharmacy",
    slug: "el-ezaby-pharmacy",
    email: "el-ezaby-pharmacy@gmail.com",
    city: "Cairo",
    address: "206 El Hegaz St, Al Matar, El Nozha, Cairo Governorate",
    phone: "02 35317347",
    location: "El Ezaby Pharmacy",
    foundedDate: 1975,
    profilePhoto:
      "https://cdna1.yellowpages.com.eg/uploads/contract-services/english/2024/13/el-ezaby-pharmacies-photo_99370_2020_wa_01_21627.jpg?3",
    rating: "4",
  },
  {
    id: 2,
    name: "Doss Pharmacy",
    slug: "doss-pharmacy",
    email: "doss-pharmacies@gmail.com",
    city: "Cairo",
    address: "Al Maahad Eshtraki, El-Montaza, Cairo Governorate",
    phone: "015 55612000",
    location: "Doss Pharmacy",
    foundedDate: 2015,
    profilePhoto:
      "https://lh3.googleusercontent.com/p/AF1QipNk9FGqzX96tNeb42nmWB0hfA5iXeOV-IJAii2X=s1360-w1360-h1020",
    rating: "3.5",
  },
];

function PharmacyList() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Pharmacies </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Pharmacy List</li>
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
                <div className="staff-search-table">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>Pharmacy Name </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex. El Ezaby"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>City </label>
                          <select className="form-control pass-input">
                            <option value="" disabled selected>
                              Select your city
                            </option>
                            <option value="cairo">Cairo</option>
                            <option value="giza">Giza</option>
                            <option value="alex">Alexandria</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="doctor-submit">
                          <button
                            type="submit"
                            className="btn btn-primary submit-list-form me-2"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row">
                  {/* Cards */}
                  {pharmaciesList.map((pharmacy) => (
                    <PharmacyCard pharmacy={pharmacy} key={pharmacy.id} />
                  ))}
                </div>
                {/* /Cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyList;
