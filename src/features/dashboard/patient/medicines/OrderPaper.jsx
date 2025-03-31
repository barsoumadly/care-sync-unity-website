import { Link, useParams } from "react-router-dom";
import MedicineTuple from "./MedicineTuple";
import { IoArrowBackOutline } from "react-icons/io5";
import useMedicines from "./useMedicines";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function OrderPaper() {
  const { id: orderId } = useParams();
  const { isLoading, data } = useMedicines(orderId);
  const medicines = data?.medicines;

  const totalPrice = medicines
    ?.map((medicine) => medicine.price)
    .reduce((i, j) => i + j);

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
                      <Link to="/patient/prescriptions">Medicines </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Medicine List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/patient/medicine-orders"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
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
                              {data?.pharmacyName} Pharmacy
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
                              Issue Date :{" "}
                              {new Date(data?.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4"></div>
                        <div className="col-lg-4 col-md-4">
                          <div className="invoice-issues-date">
                            <p>Number of Medicines: {medicines?.length}</p>
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
                                  <th>Expiration Date</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                {medicines?.map((medicine) => (
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPaper;
