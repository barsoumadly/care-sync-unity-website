import { useState } from "react";
import Modal from "../../../../ui/Modal";

function OrderModal({ medicine, onOpenModal, onSetOrders }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddMedicine = function (data) {
    onSetOrders((medicines) => [...medicines, data]);
    onOpenModal(false);
  };

  return (
    <Modal onClose={onOpenModal}>
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header">
            <h4 className="modal-title">Add Medicine</h4>
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
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="field-1" className="form-label">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-1"
                    placeholder={medicine.name}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="field-2" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-2"
                    placeholder={medicine.price}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="field-4" className="form-label">
                    Quantity
                  </label>
                  <select
                    className="form-control"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Number(event.target.value))
                    }
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={2}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row"></div>
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
            <button
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
              onClick={() =>
                handleAddMedicine({
                  name: medicine.name,
                  quantity,
                  expirationDate: medicine.expirationDate,
                  price: quantity * medicine.price,
                  _id: medicine._id,
                })
              }
            >
              Add Medicine
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderModal;
