import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../../../../ui/Modal";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import useClinicProfile from "./useClinicProfile";

function AppointmentModal({ selectedDoctor, onOpenModal }) {
  const [paymentType, setPaymentType] = useState("cash");
  const [day, setDay] = useState(selectedDoctor.schedule[0].day);
  const { id } = useParams();
  const { data: clinic, isLoading } = useClinicProfile(id);
  const days = selectedDoctor.schedule.map((schedule) => schedule.day);
  const [selectedDay] = selectedDoctor.schedule.filter(
    (schedule) => schedule.day === day
  );

  const time =
    Number(selectedDay.startTime.split(":")[0]) > 12
      ? `${selectedDay.startTime} PM`
      : `${selectedDay.startTime} AM`;

  return (
    <Modal onClose={onOpenModal}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
                      placeholder={selectedDoctor.userId.name}
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
                      placeholder={selectedDoctor.specialization}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-3" className="form-label">
                      Clinic Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-3"
                      placeholder={clinic?.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-3" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-3"
                      placeholder={clinic.address.address}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-5" className="form-label">
                      Date
                    </label>
                    <select
                      className="form-control"
                      id="field-5"
                      value={day}
                      onChange={(event) => setDay(event.target.value)}
                    >
                      {days.map((day) => (
                        <option value={day}>{day}</option>
                      ))}
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
                      placeholder={time}
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
                      placeholder={selectedDoctor.price}
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
      )}
    </Modal>
  );
}

export default AppointmentModal;
