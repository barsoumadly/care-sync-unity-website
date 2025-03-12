import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import useMedicine from "./useMedicine";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function PharmacyMedicinesList() {
  const { isLoading, data, error } = useMedicine();
  const medicines = data?.medicines;

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
                    to="/pharmacy/dashboard"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                {data ? (
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
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
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
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : (
                            <div className="table-responsive">
                              <table className="table border-0 custom-table comman-table datatable mb-0">
                                <thead>
                                  <tr>
                                    <th>Medicine Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Expiration Date</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody>
                                  {medicines?.map((medicine) => (
                                    <MedicineTuple
                                      medicine={medicine}
                                      key={medicine._id}
                                    />
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" container-fluid ">
                    <div className="col-xl-12 ">
                      <div className="card invoice-info-card">
                        <div className="card-boyd">
                          <div
                            className="text-center mt-5 py-5"
                            style={{
                              padding: "0px 10%",
                              backgroundColor: "#fff",
                            }}
                          >
                            <div className="reminder-icon">
                              <img
                                alt="medicine"
                                src="/images/dashborad/medicine.webp"
                                style={{ width: "100%" }}
                              />
                            </div>
                            <h4>No medicines are Found</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PharmacyMedicinesList;
