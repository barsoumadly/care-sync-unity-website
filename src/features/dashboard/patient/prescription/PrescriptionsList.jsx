import { Link } from "react-router-dom";
import PrescriptionTuple from "./PrescriptionTuple";
import { IoArrowBackOutline } from "react-icons/io5";
import usePrescription from "./usePrescription";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function PrescriptionsList() {
  const { data, isLoading } = usePrescription();
  const prescriptions = isLoading ? [] : [...data];

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
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="input-block local-forms">
                              <label>Doctor Name </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ex: Smith Bruklin"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="input-block local-forms">
                              <label>Hospital/Clinic Name </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ex: Heliopolis "
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
                                <option value="cairo">Cardiology</option>
                                <option value="giza">Neurology</option>
                                <option value="alex">Dentistry</option>
                                <option value="alex">Otolaryngology</option>
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
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : prescriptions?.length !== 0 ? (
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
                            {prescriptions
                              ?.reverse()
                              ?.map((prescription, index) => (
                                <PrescriptionTuple
                                  prescriptionTuple={prescription}
                                  prescriptionNumber={index + 1}
                                  key={prescription.id}
                                />
                              ))}
                          </tbody>
                        </table>
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
                                    src="/images/dashborad/prescription.jpg"
                                    style={{
                                      width: "150%",
                                      marginTop: "-50px",
                                      marginLeft: "-30px",
                                    }}
                                  />
                                </div>
                                <h4>No prescriptions are Found</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
