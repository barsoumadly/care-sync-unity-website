import { useState } from "react";

import ClinicHeader from "./ClinicHeader";
import { Link } from "react-router-dom";

const doctorsList = [
  {
    clinicId: 1,
    id: 1,
    name: "Smith Bruklin",
    profilePhoto:
      "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
    specialization: "Urology",
    days: "Mon - Wed",
    time: "2 PM - 5 PM",
    cost: 220,
  },
  {
    clinicId: 1,
    id: 2,
    name: "William Stephin",
    profilePhoto:
      "https://static.vecteezy.com/system/resources/previews/030/666/513/large_2x/doctor-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    specialization: "Radiology",
    days: "Sat - Tue",
    time: "10 AM - 5 PM",
    cost: 350,
  },
];

function DoctorsList() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={isOpen ? { filter: "blur(3px)" } : {}}
      >
        <div className="page-wrapper">
          <div className="content">
            <ClinicHeader activeTab="doctor-list" headerText="Doctors List" />
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
                            <th>cost</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {doctorsList.map((doctor) => (
                            <DoctorField
                              doctor={doctor}
                              onOpenModal={handleOpenModal}
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
      <div>{isOpen && <AppointmentModal onOpenModal={handleOpenModal} />}</div>
    </>
  );
}

function DoctorField({ doctor, onOpenModal }) {
  return (
    <tr>
      <td className="profile-image">
        <a href="profile.html">
          <img
            width={28}
            height={28}
            src={doctor.profilePhoto}
            className="rounded-circle m-r-5"
            alt=""
          />
          {doctor.name}
        </a>
      </td>
      <td> {doctor.specialization}</td>
      <td> {doctor.days}</td>
      <td> {doctor.time}</td>
      <td> {doctor.cost} EGP</td>
      <td>
        <div className="dropdown action-label">
          <button className="custom-badge book-btn" onClick={onOpenModal}>
            Book appointment
          </button>
        </div>
      </td>
    </tr>
  );
}

function AppointmentModal({ onOpenModal }) {
  const [paymentType, setPaymentType] = useState("cash");

  return (
    <div
      id="con-close-modal"
      className="modal fade show"
      tabIndex={-1}
      style={{ display: "block", paddingLeft: 0 }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Book Appointment</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => onOpenModal((isOpen) => !isOpen)}
            />
          </div>
          <div className="modal-body p-4">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-1" className="form-label">
                    Doctor Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-1"
                    placeholder="John"
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-2" className="form-label">
                    Specialization
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-2"
                    placeholder="Dentist"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="field-3" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-3"
                    placeholder="Address"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-5" className="form-label">
                    Day
                  </label>
                  <select className="form-control" id="field-5">
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-6" className="form-label">
                    Time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-6"
                    placeholder="2 PM - 5 PM"
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-4" className="form-label">
                    Cost
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-4"
                    placeholder="Boston"
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="field-4" className="form-label">
                    Payment Type
                  </label>
                  <select
                    className="form-control"
                    value={paymentType}
                    onChange={(event) => setPaymentType(event.target.value)}
                  >
                    <option value="cash">Cash</option>
                    <option value="credit">Credit</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary waves-effect"
              data-bs-dismiss="modal"
              onClick={() => onOpenModal((isOpen) => !isOpen)}
            >
              Close
            </button>
            <Link
              to={
                paymentType === "cash"
                  ? "/patient/appointments"
                  : "/patient/payment-gateway"
              }
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
