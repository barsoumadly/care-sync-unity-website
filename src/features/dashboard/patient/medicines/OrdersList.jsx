import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useMedicineOrders from "./useMedicineOrders";
import OrderTuple from "./OrderTuple";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function OrdersList() {
  const { isLoading, data: orders } = useMedicineOrders();
  const data = orders ? [...orders] : [];

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-6">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>Medicine Orders</a>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Orders List</li>
                  </ul>
                </div>
                <div class="col-sm-5 col-6 text-end">
                  <Link
                    to="/patient/dashboard"
                    class="btn btn-primary btn-rounded"
                  >
                    <IoArrowBackOutline /> Return Back
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    <div className="staff-search-table">
                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="input-block local-forms">
                              <label>Pharmacy Name </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="ex. Royal"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="input-block local-forms">
                              <label>Date </label>
                              <input
                                className="form-control"
                                type="date"
                                placeholder="ex. Royal"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-3">
                            <div className="doctor-submit">
                              <button
                                type="submit"
                                className="btn btn-primary submit-list-form me-2"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="table-responsive">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : data.length !== 0 ? (
                        <table className="table border-0 custom-table comman-table datatable mb-0">
                          <thead>
                            <tr>
                              <th>Order Number</th>
                              <th>Pharmacy Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {data?.reverse()?.map((order, index) => (
                              <OrderTuple
                                order={order}
                                key={order._id}
                                orderNumber={index + 1}
                              />
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className=" container-fluid ">
                          <div className="col-xl-12 ">
                            <div className="card invoice-info-card">
                              <div className="card-boyd">
                                <div
                                  className="text-center mt-5 py-5"
                                  style={{
                                    padding: "0px 10%",
                                    backgroundColor: "#fff",
                                  }}
                                >
                                  <div className="reminder-icon">
                                    <img
                                      alt="medicine"
                                      src="/images/dashborad/order.png"
                                      style={{
                                        width: "180%",
                                        marginTop: "-90px",
                                        marginLeft: "-40px",
                                      }}
                                    />
                                  </div>
                                  <h4>No orders are Found</h4>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersList;
