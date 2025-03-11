import { Link } from "react-router-dom";
import Modal from "../../../../ui/Modal";
import toast from "react-hot-toast";

function CheckChosicModal({ handleOpenModal, id, name = "Doctor" }) {
  function hanbleDelete() {
    console.log(id);
    toast.success(`${name} successfully deleted`);
    handleOpenModal();
  }
  return (
    <Modal onClose={handleOpenModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Delete {name}</h4>
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
            style={{ textAlign: "center", fontWeight: "500", fontSize: "18px" }}
          >
            <p>Are you sure you want to delete this Doctor?</p>
            <p>This action cannot be undone.</p>
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
              className="btn btn-info"
              onClick={hanbleDelete}
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
            >
              Delete {name}
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CheckChosicModal;
