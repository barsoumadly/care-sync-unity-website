import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../../../../ui/Modal";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import useClinicProfile from "./useClinicProfile";
import useAppointment from "./useAppointment";

function AppointmentModal({ selectedDoctor, onOpenModal }) {
  const [paymentType, setPaymentType] = useState("cash");
  const [type, setType] = useState("select");
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

  const { bookNewAppointment } = useAppointment();

  const saveAppointment = async function () {
    const price =
      type === "consultation"
        ? Math.round(selectedDoctor.price / 2)
        : selectedDoctor.price;

    const appointment = {
      clinicId: id,
      doctorId: selectedDoctor?._id,
      scheduledAt: day,
      specialization: selectedDoctor?.specialization,
      price,
      type,
      status: "pending",
      paymentType,
    };

    bookNewAppointment(appointment);
  };

  const saveAppointmentToLocalStorage = function () {
    const price =
      type === "consultation"
        ? Math.round(selectedDoctor.price / 2)
        : selectedDoctor.price;

    const appointment = {
      clinicId: id,
      doctorId: selectedDoctor?._id,
      scheduledAt: day,
      specialization: selectedDoctor?.specialization,
      price,
      type,
      status: "pending",
      paymentType,
    };

    localStorage.setItem("appointment", JSON.stringify(appointment));
  };

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
                      value={selectedDoctor.userId.name}
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
                      value={selectedDoctor.specialization}
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
                      value={clinic?.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-3" className="form-label">
                      Booking Type
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      id="field-3"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      <option value="select" disabled>
                        Select an Option
                      </option>
                      <option value="examination">Examination</option>
                      <option value="consultation">Consultation</option>
                    </select>
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
                      value={time}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-4" className="form-label">
                      Price
                    </label>
                    {type === "consultation" ? (
                      <input
                        type="text"
                        className="form-control"
                        id="field-4"
                        value={Math.round(selectedDoctor.price / 2)}
                        disabled
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        id="field-4"
                        value={selectedDoctor.price}
                        disabled
                      />
                    )}
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
                onClick={
                  paymentType === "cash"
                    ? saveAppointment
                    : saveAppointmentToLocalStorage
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
