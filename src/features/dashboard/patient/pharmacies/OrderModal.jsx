import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../../ui/Modal";

function OrderModal({ medicine, onOpenModal }) {
  const [paymentType, setPaymentType] = useState("cash");
  const pharmacy = JSON.parse(localStorage.getItem("pharmacy"));

  return (
    <Modal>
      <div
        id="con-close-modal"
        className="modal styled-modal fade show"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog " style={{ marginTop: "150px" }}>
          <div className="modal-content ">
            <div className="modal-header">
              <h4 className="modal-title">Order Medicine</h4>
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-2" className="form-label">
                      Cost
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-2"
                      placeholder={medicine.cost}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-3" className="form-label">
                      Pharmacy Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-3"
                      placeholder={pharmacy.name}
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
                      placeholder="20 mohamed amin - ahmed essmat"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="field-4" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="field-4"
                      placeholder="0123456789"
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
                Order Medicine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderModal;
