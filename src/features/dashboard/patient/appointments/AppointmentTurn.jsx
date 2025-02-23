import { Link } from "react-router-dom";

function AppointmentTurn({ onOpenModal, appointmentTurn }) {
  return (
    <div
      id="con-close-modal"
      className="modal fade show"
      tabIndex={-1}
      style={{ display: "block", paddingLeft: 0, marginTop: "95px" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Appointment Turn</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => onOpenModal((isOpen) => !isOpen)}
            />
          </div>
          <div className="modal-body p-4">
            <div style={{ textAlign: "center" }}>
              <p className="modal-text">
                {appointmentTurn === 0
                  ? "It's your turn"
                  : "Your turn in waiting list"}
              </p>
              <div class="circle">
                <p>{appointmentTurn === 0 ? "Go" : appointmentTurn}</p>
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
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
            >
              Cancel Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentTurn;
