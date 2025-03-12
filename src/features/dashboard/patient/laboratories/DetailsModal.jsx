import Modal from "../../../../ui/Modal";

function DetailsModal({ onOpenModal, analysis }) {
  return (
    <Modal onClose={onOpenModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{analysis.name}</h4>
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
              <p className="modal-text">{analysis.details}</p>

              <div
                className="circle"
                style={{
                  width: "120px",
                  backgroundColor: "rgb(46 55 164 / 93%)",
                }}
              >
                <img
                  alt="medicine"
                  src="/images/dashborad/analysis.webp"
                  style={{ width: "115%" }}
                />
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
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DetailsModal;
