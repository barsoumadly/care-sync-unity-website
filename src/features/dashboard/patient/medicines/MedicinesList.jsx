import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";

const medicines = [
  {
    id: 1,
    name: "Bronchicum",
    pharmacyName: "El Ezaby Pharmacy",
    expirationDate: "12-09-2030",
    date: "04-02-2025",
    cost: 100,
    status: "on way",
  },
  {
    id: 2,
    name: "Panadol",
    pharmacyName: "Doss Pharmacy",
    expirationDate: "08-05-2030",
    date: "18-01-2025",
    cost: 69,
    status: "delivered",
  },
  {
    id: 3,
    name: "zerocin 500mg",
    pharmacyName: "El Ezaby Pharmacy",
    expirationDate: "09-11-2030",
    date: "20-02-2025",
    cost: 80,
    status: "obtained",
  },
];

function MedicineList() {
  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-6">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Medicines</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Medicine List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/patient/dashboard"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
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
                              <label>Medicine Name </label>
                              <input className="form-control" type="text" />
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
                            <th>Medicine Name</th>
                            <th>Pharmacy Name</th>
                            <th>Expiration Date</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {medicines.map((medicine) => (
                            <MedicineTuple
                              medicine={medicine}
                              key={medicine.id}
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

export default MedicineList;
