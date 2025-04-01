import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import AnalysisOrderChart from "./charts/AnalysisOrderChart";
import EarningsChart from "./charts/EarningsChart";
import PatientNumberChart from "./charts/patientNumberChart";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import useAnalysisOrders from "./orders/useAnalysisOrders";
import OrderTuple from "./orders/AnalysisTuple";

function LaboratoryDashboard() {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const { isLoading, data: analysis } = useAnalysisOrders();
  const analysisOrders = isLoading ? [] : [...analysis];

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
                      45 <span>Person/Month</span>
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
                      Analysis Orders
                    </h4>
                  </div>
                  <div id="heart-rate" />
                  <div className="dash-content">
                    <h5>
                      <br />
                      49 <span>Order/Month</span>
                    </h5>
                  </div>
                  <div id="apexcharts-area">
                    <AnalysisOrderChart />
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
                      13,200 <span>EGP</span>
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
            <div className="col-12 col-md-12  col-xl-15">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title patient-visit">
                    <h4>Analysis Orders</h4>
                    <Link
                      to="/laboratory/analysis-orders"
                      style={{ color: "rgb(46, 55, 164)" }}
                    >
                      Show all
                    </Link>
                  </div>
                  <div className="body-mass-blk">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : analysisOrders?.length !== 0 ? (
                            <table className="table border-0 custom-table comman-table datatable mb-0">
                              <thead>
                                <tr>
                                  <th>Order Number</th>
                                  <th>Patient Name</th>
                                  <th>Phone Number</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                {analysisOrders
                                  ?.reverse()
                                  ?.slice(0, 3)
                                  ?.map((analysis, index) => (
                                    <OrderTuple
                                      order={analysis}
                                      key={analysis._id}
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
                                          src="/images/dashborad/analysis.png"
                                          style={{
                                            width: "150%",
                                            marginTop: "-80px",
                                            marginLeft: "-30px",
                                          }}
                                        />
                                      </div>
                                      <h4>No Results are Found</h4>
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

export default LaboratoryDashboard;
