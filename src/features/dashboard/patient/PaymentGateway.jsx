import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import PaymentConfirmed from "./PaymentConfirmed";
import toast from "react-hot-toast";

function PaymentGateway() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [cardName, setCardName] = useState("");
  const [creditType, setCreditType] = useState("CC");
  const [cardNumber, setCardNumber] = useState("");
  const [verificationNumber, setVerificationNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleConfirmedPayment = function () {
    if (
      !cardName ||
      !creditType ||
      !cardName ||
      !verificationNumber ||
      !expirationDate
    ) {
      toast.error("Please complete all fields");
    } else {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Payment Gateway</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Lightbox */}
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Payment</h4>
              </div>
              <div className="card-body">
                <div className="wizard">
                  <ul
                    className="nav nav-tabs justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li
                      className="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Seller Details"
                      data-bs-original-title="Seller Details"
                    >
                      <a
                        className={`nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                          isConfirmed ? "" : "active"
                        }`}
                        id="step1-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step1"
                        aria-selected="true"
                      >
                        <FaUser />
                      </a>
                    </li>
                    <li
                      className="nav-item flex-fill"
                      role="presentation"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Company Document"
                      data-bs-original-title="Company Document"
                    >
                      <a
                        className={`nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center ${
                          isConfirmed ? "active" : ""
                        }`}
                        id="step2-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="step2"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        <MdPayment />
                      </a>
                    </li>
                  </ul>
                  {isConfirmed ? (
                    <PaymentConfirmed
                      setIsConfirmed={setIsConfirmed}
                      creditDetails={{ cardName, creditType, cardNumber }}
                    />
                  ) : (
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
                                  value={cardName}
                                  onChange={(event) =>
                                    setCardName(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-block mb-3">
                                <label className="form-label">
                                  Credit Card Type
                                </label>
                                <select
                                  className="form-select selectG"
                                  value={creditType}
                                  onChange={(event) =>
                                    setCreditType(event.target.value)
                                  }
                                  required
                                >
                                  <option selected="">Select Card Type</option>
                                  <option value="CC">CreditCard</option>
                                  <option value="MC">MasterCard</option>
                                  <option value="VI">PayPal</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="input-block mb-3">
                                <label
                                  htmlFor="basicpill-cardno-input"
                                  className="form-label"
                                >
                                  Credit Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cardno-input"
                                  value={cardNumber}
                                  onChange={(event) =>
                                    setCardNumber(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-block mb-3">
                                <label
                                  htmlFor="basicpill-card-verification-input"
                                  className="form-label"
                                >
                                  Card Verification Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-card-verification-input"
                                  value={verificationNumber}
                                  onChange={(event) =>
                                    setVerificationNumber(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="input-block mb-3">
                                <label
                                  htmlFor="basicpill-expiration-input"
                                  className="form-label"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-expiration-input"
                                  value={expirationDate}
                                  onChange={(event) =>
                                    setExpirationDate(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="d-flex">
                          <Link
                            to="/patient/clinics"
                            className="btn btn-primary previous me-2"
                          >
                            Back
                          </Link>

                          <button
                            className="btn btn-primary next"
                            data-bs-toggle="modal"
                            data-bs-target="#save_modal"
                            onClick={handleConfirmedPayment}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
