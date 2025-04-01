import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useMedicineOrders from "./useMedicineOrders";
import OrderTuple from "./OrderTuple";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import { useAuth } from "../../../../context/AuthContext";

function PharmacyOrdersList() {
  const { user } = useAuth();
  const { isLoading, data } = useMedicineOrders(user.id);

  const orders = isLoading ? [] : data?.length ? [...data] : [];

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
                    <div className="table-responsive">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <table className="table border-0 custom-table comman-table datatable mb-0">
                          <thead>
                            <tr>
                              <th>Order Number</th>
                              <th>Patient Name</th>
                              <th>Phone Number</th>
                              <th>Address</th>
                              <th>Date</th>
                              <th>Paid Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {orders?.reverse()?.map((order, index) => (
                              <OrderTuple
                                order={order}
                                key={order._id}
                                orderNumber={index + 1}
                                ordersNum={orders?.length}
                              />
                            ))}
                          </tbody>
                        </table>
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

export default PharmacyOrdersList;
