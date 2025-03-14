import { Link, useNavigate } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import useMedicineOrders from "../medicines/useMedicineOrders";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { addMedicinesOrder } from "../../../../services/medicineOrders";

function OrderPaper() {
  const { isLoading, data } = useMedicineOrders();
  const order = JSON.parse(localStorage.getItem("order"));

  const numberOfMedicines = order?.medicines
    ?.map((medicine) => medicine.quantity)
    .reduce((i, j) => i + j);

  const totalPrice = order?.medicines
    ?.map((medicine) => medicine.price)
    .reduce((i, j) => i + j);

  const navigate = useNavigate();

  const handleCancel = function () {
    localStorage.removeItem("order");
    navigate("/patient/pharmacies");
  };

  const handleCofirm = async function () {
    await addMedicinesOrder(order);
    localStorage.removeItem("order");
    navigate("/patient/medicine-orders");
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row justify-content-center">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-6">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/patient/prescriptions">Medicines Order </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Check Order</li>
                  </ul>
                </div>
              </div>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="col-xl-10">
                <div className="card invoice-info-card">
                  <div className="card-body">
                    <div className="invoice-item invoice-item-one">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="invoice-logo">
                            <img
                              src="/public/images/logo/care-sync-unity-logo.png"
                              alt="logo"
                            />
                          </div>
                          <div className="invoice-head">
                            <h2>Medicines Order</h2>
                            <p>Order Number : #{data?.length + 1} </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="invoice-info">
                            <strong className="customer-text-one">
                              Medicines From
                            </strong>
                            <h6 className="invoice-name">
                              {order?.pharmacyName} Pharmacy
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-issues-box">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="invoice-issues-date">
                            <p>
                              Issue Date : {new Date().toLocaleDateString()}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4"></div>
                        <div className="col-lg-4 col-md-4">
                          <div className="invoice-issues-date">
                            <p>Number of Medicines: {numberOfMedicines}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice Item */}
                    {/* Invoice Item */}
                    <div className="invoice-item invoice-table-wrap">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="invoice-table table table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Medicine Name</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {order?.medicines.map((medicine) => (
                                  <MedicineTuple
                                    medicine={medicine}
                                    key={medicine.id}
                                  />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice Item */}
                    <div className="col-lg-6 col-md-6">
                      <div className="invoice-total-card">
                        <div className="invoice-total-box">
                          <div className="invoice-total-inner">
                            <p>
                              Additional Charges <span>35 EGP</span>
                            </p>
                            <p className="mb-0">
                              Sub total <span>{totalPrice} EGP</span>
                            </p>
                          </div>
                          <div className="invoice-total-footer">
                            <h4>
                              Total Amount <span>{totalPrice + 35} EGP</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                        onClick={handleCofirm}
                      >
                        Confirm Order
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary cancel-form"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </div>
  );
}

export default OrderPaper;
