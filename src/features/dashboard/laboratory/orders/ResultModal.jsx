import { useState } from "react";
import Modal from "../../../../ui/Modal";

function ResultModal({ analysis, onOpenModal, onSetResults }) {
  const [result, setResult] = useState(
    analysis.result !== "__ mg/dl" ? analysis.result : ""
  );
  const [normalResult, setNormalResult] = useState(
    analysis.normalResult !== "__ to __ mg/dl" ? analysis.normalResult : ""
  );

  const handleAddMedicine = function (data) {
    onSetResults((analysis) => {
      const result = analysis.map((analysis) =>
        analysis._id === data._id ? data : analysis
      );
      return result;
    });
    onOpenModal(false);
  };

  return (
    <Modal onClose={onOpenModal}>
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header">
            <h4 className="modal-title">Add Result</h4>
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
                    Analysis Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-1"
                    placeholder={analysis.name}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="field-4" className="form-label">
                    Result
                  </label>
                  <input
                    className="form-control"
                    placeholder="__ mg/dl"
                    value={result}
                    onChange={(event) => setResult(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="field-4" className="form-label">
                    Normal Result
                  </label>
                  <input
                    className="form-control"
                    placeholder="__ to __ mg/dl"
                    value={normalResult}
                    onChange={(event) => setNormalResult(event.target.value)}
                  />
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
            <button
              type="button"
              className="btn btn-info"
              style={{ backgroundColor: "#2e37a4", color: "#fff" }}
              onClick={() =>
                handleAddMedicine({
                  name: analysis.name,
                  result: result,
                  normalResult: normalResult,
                  price: analysis.price,
                  _id: analysis._id,
                })
              }
            >
              Save Result
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ResultModal;
