import ClinicCard from "./ClinicCard";

const clinicsList = [
  {
    id: 1,
    name: "Heliopolis Hospital",
    slug: "heliopolis-hospital",
    email: "heliopolis-hospital@gmail.com",
    city: "Cairo",
    address: "El Hegaz St, Al Matar, El Nozha, Cairo Governorate",
    phone: "02 26339870",
    location: "Heliopolis Hospital",
    specialization: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    foundedDate: 1937,
    profilePhoto:
      "https://lh5.googleusercontent.com/p/AF1QipPopa6nUNMevGnUYIrhcu2weu-SP-C661XfNIFT=w243-h174-n-k-no-nu",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNa7dcPiWAkZCVHhwyQUvBrH0WLV8zIXMX9rMle=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipNhcWsTLwQ87CYlzwZsobYz8MTy9Z3ngcdKc_eW=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipN6wIiLf0SGaXNK4flDJ-NJ4RVlThLGj316lc47=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipO9v7ZgcJ_GIwW0eOgzCEqXOJNjHar1v7V_40dS=s1360-w1360-h1020",
    ],
    rating: 4,
  },
  {
    id: 2,
    name: "Cleopatra Hospital",
    slug: "cleopatra-hospital",
    email: "cleopatra-hospital@gmail.com",
    city: "Cairo",
    address: "39 Cleopatra، Maidan Salahuddin Square, Heliopolis",
    phone: "02 24143931",
    location: "cleopatra hospital heliopolis",
    specialization: ["Gynocolgy", "Neurology", "Dentist", "Otolaryngology"],
    foundedDate: 1979,
    profilePhoto:
      "https://lh3.googleusercontent.com/p/AF1QipO_3Ws6r-6SA5RMKVYq0SVKhjQxKVC5wH1nG7HW=s1360-w1360-h1020",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOU43wsL8ZDWCnC4UUpoFDhDW6K5CN7_xW4pMkS=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipOtKOli7fk3qE4WNj7XV7MLtBYcIMRZqgPVi2k=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipOZU5YcObC2X2JXmzRbmmZ7CaaRWKFstojAb9bc=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipN58PI00Yg4ncIy9Rju8zZtT-1MFTZmQPWoHzWe=s1360-w1360-h1020",
    ],
    rating: 4.5,
  },
];

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
                          <label>Clinic Name </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex. Heliopolis"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>Specialization </label>
                          <select className="form-control pass-input">
                            <option value="" disabled selected>
                              Select Specialization
                            </option>
                            <option value="cairo">cardiology</option>
                            <option value="giza">neurology</option>
                            <option value="alex">oncology</option>
                            <option value="alex">orthopedics</option>
                          </select>
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
                  {clinicsList.map((clinic) => (
                    <ClinicCard clinic={clinic} key={clinic.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicsList;
