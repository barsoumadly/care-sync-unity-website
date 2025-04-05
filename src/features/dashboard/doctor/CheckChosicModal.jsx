import { Link } from "react-router-dom";
import Modal from "../../../ui/Modal";

function CheckChosicModal({ handleOpenModal, onConfirm }) {
  function hanbleDelete() {
    onConfirm();
    handleOpenModal();
  }
  return (
    <Modal onClose={handleOpenModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"> Save prescription</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleOpenModal()}
            />
          </div>
          <div
            className="modal-body p-5"
            style={{ textAlign: "center", fontSize: "18px" }}
          >
            <p style={{ fontWeight: "600" }}>
              Are you sure you finished the examination?
            </p>
            <p> You can't update or access the patient again.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary waves-effect"
              data-bs-dismiss="modal"
              onClick={() => handleOpenModal()}
            >
              Cancel
            </button>
            <Link
              type="button"
              className="link btn btn-info"
              onClick={hanbleDelete}
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
            >
              Save prescription
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CheckChosicModal;
