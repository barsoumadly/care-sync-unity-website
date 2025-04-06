import { useState } from "react";
import PatientTableTuples from "./PatientTableTuples";
import CheckChosicModal from "../reusable/CheckChosicModal";
import { useLocation } from "react-router-dom";
import usePatientAppointmentList from "./usePatientAppointmentList";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function PatientsOfDoc() {
  const [isOpen, setIsOpen] = useState(false);
  const [patientId, setPatientId] = useState(false);
  const path = useLocation();
  const doctorId = path.pathname.split("/")[3];

  const { data: patients, isLoading } = usePatientAppointmentList(doctorId);

  const handleOpenModal = function (id) {
    setPatientId(id);
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="payments.html">Appointment List </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Patient List </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table show-entire">
              <div className="card-body">
                {/* Table Header */}
                <div className="page-table-header mb-2">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="doctor-table-blk">
                        <h3>Patient List</h3>
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
                            <a className="btn btn-primary add-pluss ms-2">
                              <img
                                src="/images/dashborad/icons/plus.svg"
                                alt=""
                              />
                            </a>
                            <a className="btn btn-primary doctor-refresh ms-2">
                              <img
                                src="/images/dashborad/icons/re-fresh.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Table Header */}
                <div className="staff-search-table">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms cal-icon">
                          <label>From </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms cal-icon">
                          <label>To </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3 ">
                        <div className="input-block local-forms">
                          <label>Payment Status </label>
                          <select className="form-control select">
                            <option>Select Payment Status</option>
                            <option>Paid</option>
                            <option>Un Paid</option>
                            <option>Patially Paid</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3 ms-auto">
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
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <table className="table border-0 custom-table comman-table datatable mb-0">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Turn</th>
                          <th>Patient</th>
                          <th>Phone</th>
                          <th>Payment Type</th>
                          <th>Paid Amount</th>
                          <th>Specialization</th>
                          <th>Type</th>
                          <th>Paid Date</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {patients?.map((patient) => (
                          <PatientTableTuples
                            key={patient.patient.id}
                            patient={patient}
                            handleOpenModal={handleOpenModal}
                          />
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <CheckChosicModal
              handleOpenModal={handleOpenModal}
              id={patientId}
              name="Patient"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientsOfDoc;
