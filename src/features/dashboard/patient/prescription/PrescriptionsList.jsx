import PrescriptionTuple from "./PrescriptionTuple";

const prescriptions = [
  {
    id: 1,
    clinicName: "Heliopolis Hospital",
    doctor: {
      id: "1",
      name: "Smith Bruklin",
      specialization: "Urology",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      signature: "",
    },
    date: "05.08.2023",
  },
  {
    id: 2,
    clinicName: "Cleopatra Hospital",
    doctor: {
      id: "2",
      name: "William Stephin",
      specialization: "Radiology",
      profilePhoto:
        "https://static.vecteezy.com/system/resources/previews/030/666/513/large_2x/doctor-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    },
    date: "08.11.2024",
  },
];

function PrescriptionsList() {
  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Prescriptions</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">
                      Prescription List
                    </li>
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
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="input-block local-forms">
                              <label>Doctor Name </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="input-block local-forms">
                              <label>Specialization </label>
                              <select className="form-control select">
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Oncology</option>
                                <option>Otolaryngology</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
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
                    <div className="table-responsive">
                      <table className="table border-0 custom-table comman-table datatable mb-0">
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Clinic Name</th>
                            <th>Specialization</th>
                            <th>Date</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {prescriptions.map((prescription) => (
                            <PrescriptionTuple
                              prescriptionTuple={prescription}
                              key={prescription.id}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrescriptionsList;
