import { Link } from "react-router-dom";
import useAppointment from "./hospitals/useAppointment";

function PaymentConfirmed({ setIsConfirmed, creditDetails }) {
  const appointment = JSON.parse(localStorage.getItem("appointment"));

  const { bookNewAppointment } = useAppointment();

  const saveAppointment = function () {
    bookNewAppointment(appointment);
  };

  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade"
        role="tabpanel"
        id="step3"
        aria-labelledby="step3-tab"
        style={{ display: "block", opacity: 1 }}
      >
        <div className="mb-4">
          <h5>Payment Details</h5>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-block mb-3">
                <label
                  htmlFor="basicpill-namecard-input"
                  className="form-label"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basicpill-namecard-input"
                  disabled
                  value={creditDetails.cardName}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-block mb-3">
                <label className="form-label">Credit Card Type</label>
                <select className="form-select selectG" disabled>
                  <option>{creditDetails.creditType}</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-block mb-3">
                <label htmlFor="basicpill-cardno-input" className="form-label">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basicpill-cardno-input"
                  value={creditDetails.cardNumber}
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex">
          <button
            className="btn btn-primary previous me-2"
            onClick={() => setIsConfirmed(false)}
          >
            Back
          </button>
          <Link
            to="/patient/appointments"
            className="btn btn-primary next"
            data-bs-toggle="modal"
            data-bs-target="#save_modal"
            onClick={saveAppointment}
          >
            Confirm Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmed;
