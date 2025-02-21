import LaboratoryCard from "./LaboratoryCard";

const laboratories = [
  {
    id: 1,
    name: "Alfa Laboratory",
    slug: "alfa-laboratory",
    email: "alfa-laboratory@gmail.com",
    city: "Cairo",
    address: "El-Bostan, Heliopolis, Cairo Governorate",
    phone: "012 81001504",
    location: "Doss Pharmacy",
    foundedDate: 1975,
    profilePhoto:
      "https://lh3.googleusercontent.com/p/AF1QipNCM2ymcmttFz5-YmrUyMwNQwfN70YkJ0jFsWUZ=s1360-w1360-h1020",
    rating: "3.5",
  },
  {
    id: 2,
    name: "Royal Laboratory",
    slug: "royal-laboratory",
    email: "royal-laboratory@gmail.com",
    city: "Cairo",
    address: "5 El-Tahawy, Manshîyet el Bakri, Cairo Governorate",
    phone: "011 16774349",
    location: "Royal Laboratory",
    foundedDate: 1988,
    profilePhoto:
      "https://lh5.googleusercontent.com/p/AF1QipMaoHfXw7wj-okAdDPgFHGvq6QOC3xG1eo_-5GT=w243-h304-n-k-no-nu",
    rating: "4",
  },
];

function LaboratoryList() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Laboratories </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Laboratory List</li>
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
                          <label>Laboratory Name </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex. Alfa"
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
                  {laboratories.map((laboratory) => (
                    <LaboratoryCard
                      laboratory={laboratory}
                      key={laboratory.id}
                    />
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

export default LaboratoryList;
