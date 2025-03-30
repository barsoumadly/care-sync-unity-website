import { useState } from "react";

import ClinicHeader from "./ClinicHeader";
import DoctorField from "./DoctorField";
import AppointmentModal from "./AppointmentModal";
import useClinicProfile from "./useClinicProfile";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function DoctorsList() {
  const { id } = useParams();
  const { data: clinic, isLoading } = useClinicProfile(id);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectDoctor = function (doctor) {
    setSelectedDoctor(doctor);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="main-wrapper">
            <div className="page-wrapper">
              <div className="content">
                <ClinicHeader activeTab="doctor-list" clinic={clinic} />
                {/* Page Header */}
                <div className="page-header"></div>
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
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="ex: Smith Bruklin"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-xl-4">
                                <div className="input-block local-forms">
                                  <label>Specialization </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="ex: Dentist"
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
                        <div className="table-responsive">
                          <table className="table border-0 custom-table comman-table datatable mb-0">
                            <thead>
                              <tr>
                                <th>Doctor Name</th>
                                <th>Specialization</th>
                                <th>Days</th>
                                <th>Time</th>
                                <th>Price</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {clinic?.doctors?.map((doctor) => (
                                <DoctorField
                                  doctor={doctor}
                                  onOpenModal={handleOpenModal}
                                  onSelectDoctor={handleSelectDoctor}
                                  key={doctor.id}
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
          <div>
            {isOpen && (
              <AppointmentModal
                selectedDoctor={selectedDoctor}
                onOpenModal={handleOpenModal}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default DoctorsList;
