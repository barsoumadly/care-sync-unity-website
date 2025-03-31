import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import EarningsChart from "./charts/EarningsChart";
import MedicineOrderChart from "./charts/MedicineOrderChart";
import PatientNumberChart from "./charts/PatientNumberChart";
import OrderTuple from "./orders/OrderTuple";
import useMedicineOrders from "./orders/useMedicineOrders";
import useProfile from "./useProfile";

function PharmacyDashboard() {
  const { data: pharmacyData, isLoading } = useProfile();
  const { user } = useAuth();
  const hour = new Date().getHours();
  const { data: medicines, isLoading: isLoad1 } = useMedicineOrders(
    isLoading ? null : pharmacyData?.userId?._id
  );

  const medicineOrders = isLoad1 ? [] : medicines ? [...medicines] : [];

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
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
                  <li className="breadcrumb-item active">My Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="good-morning-blk">
            <div className="row">
              <div className="col-md-6">
                <div className="morning-user">
                  <h2>
                    {hour < 12
                      ? "Good Morning, "
                      : hour < 17
                      ? "Good Afternoon, "
                      : "Good Evening, "}
                    <span>{user.name}</span>
                  </h2>
                  <p>Have a nice day</p>
                </div>
              </div>
              <div className="col-md-6 position-blk">
                <div className="morning-img">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/morning-img-03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <DashboardContents /> */}
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <div className="card report-blk">
                <div className="card-body">
                  <div className="report-head">
                    <h4
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "0fr 1fr 1fr",
                        columnGap: "10px",
                      }}
                    >
                      <div
                        className="dash-boxs comman-flex-center"
                        style={{ marginTop: "5px" }}
                      >
                        <img
                          src="../images/dashborad/icons/profile-add.svg"
                          alt=""
                        />
                      </div>
                      New Patients
                    </h4>
                  </div>
                  <div id="heart-rate" />
                  <div className="dash-content">
                    <h5>
                      <br />
                      40 <span>Person/Month</span>
                    </h5>
                  </div>
                  <div id="apexcharts-area">
                    <PatientNumberChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <div className="card report-blk">
                <div className="card-body">
                  <div className="report-head">
                    <h4
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "0fr 1fr 1fr",
                        columnGap: "10px",
                      }}
                    >
                      <div
                        className="dash-boxs comman-flex-center"
                        style={{ marginTop: "5px" }}
                      >
                        <img
                          src="../images/dashborad/icons/dep-icon-01.svg"
                          alt=""
                        />
                      </div>
                      Medicine Orders
                    </h4>
                  </div>
                  <div id="heart-rate" />
                  <div className="dash-content">
                    <h5>
                      <br />
                      48 <span>Order/Month</span>
                    </h5>
                  </div>
                  <div id="apexcharts-area">
                    <MedicineOrderChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <div className="card report-blk">
                <div className="card-body">
                  <div className="report-head">
                    <h4
                      style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "0fr 1fr 1fr",
                        columnGap: "10px",
                      }}
                    >
                      <div
                        className="dash-boxs comman-flex-center"
                        style={{ marginTop: "5px" }}
                      >
                        <img
                          src="../images/dashborad/icons/empty-wallet.svg"
                          alt=""
                        />
                      </div>
                      Earnings
                    </h4>
                  </div>
                  <div id="heart-rate" />
                  <div className="dash-content">
                    <h5>
                      <br />
                      13,486 <span>EGP</span>
                    </h5>
                  </div>
                  <div id="apexcharts-area">
                    <EarningsChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12  col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title patient-visit">
                    <h4>Medicine Orders</h4>
                    <Link
                      to="/pharmacy/medicine-orders"
                      style={{ color: "rgb(46, 55, 164)" }}
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="body-mass-blk">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          {isLoad1 ? (
                            <LoadingSpinner />
                          ) : medicineOrders?.length !== 0 ? (
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
                                {medicineOrders
                                  ?.reverse()
                                  ?.map((order, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default PharmacyDashboard;
