import { useState } from "react";
import { Link } from "react-router-dom";

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

export default AppointmentModal;
