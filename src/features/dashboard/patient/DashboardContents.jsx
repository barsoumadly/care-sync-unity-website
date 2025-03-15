import useProfile from "./useProfile";
import SpinnerMini from "../../../ui/SpinnerMini";
import toast from "react-hot-toast";
import useMedicineOrders from "./medicines/useMedicineOrders";
import OrderTuple from "./medicines/OrderTuple";
import AnalysisTuple from "./analysis/analysisTuple";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import useAnalysisOrders from "./analysis/useAnalysisOrders";

function DashboardContents() {
  const { data: patientData, isLoading, error } = useProfile();
  const { data: medicines, isLoading: isLoad1 } = useMedicineOrders();
  const { isLoading: isLoad2, data: analysis } = useAnalysisOrders();
  const medicineOrders = isLoad1 ? [] : [...medicines];
  const analysisOrders = isLoad2 ? [] : [...analysis];

  console.log(analysisOrders);

  if (error) toast.error(error?.message);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div className="card report-blk">
            <div className="card-body">
              <div className="report-head">
                <h4>
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/report-icon-01.svg"
                    className="me-2"
                    alt=""
                  />
                  Heart Rate
                </h4>
              </div>
              <div id="heart-rate" />
              <div className="dash-content">
                {isLoading ? (
                  <SpinnerMini />
                ) : (
                  <h5>
                    <br />
                    {patientData?.heartRate || "__"} <span>bpm</span>
                  </h5>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div className="card report-blk">
            <div className="card-body">
              <div className="report-head">
                <h4>
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/report-icon-02.svg"
                    className="me-2"
                    alt=""
                  />
                  Temperature
                </h4>
              </div>
              <div id="temperature-chart" />
              <div className="dash-content">
                {isLoading ? (
                  <SpinnerMini />
                ) : (
                  <h5>
                    <br />
                    {patientData?.temperature || "__"} <span>°C</span>
                  </h5>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div className="card report-blk">
            <div className="card-body">
              <div className="report-head">
                <h4>
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/report-icon-03.svg"
                    className="me-2"
                    alt=""
                  />
                  Blood Pressure
                </h4>
              </div>
              <div id="pressure-chart" />
              <div className="dash-content">
                {isLoading ? (
                  <SpinnerMini />
                ) : (
                  <h5>
                    <br />
                    {patientData?.bloodPressure || "__"} <span>mm/Hg</span>
                  </h5>
                )}
              </div>
              <div className="dash-content">
                Blood Type:{" "}
                <span
                  style={{
                    fontSize: "24px",
                    color: "#2E37A4",
                    fontWeight: "600",
                  }}
                >
                  {isLoading ? (
                    <SpinnerMini />
                  ) : (
                    ` ${patientData?.bloodType || "__"}`
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12  col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4 style={{ marginBottom: "3px" }}>
                  Body Mass index
                  <br />
                  <br />
                  <br />
                  <span
                    style={{
                      fontSize: "24px",
                      color: "#2E37A4",
                      fontWeight: "600",
                    }}
                  >
                    {Math.round(
                      patientData?.weight /
                        Math.pow(patientData?.height * 0.01, 2)
                    ) || "__"}
                  </span>{" "}
                  KG/M<sup>2</sup>
                </h4>
              </div>
              <div className="body-mass-blk">
                <div className="row">
                  <div className="col-md-6">
                    <center>
                      {isLoading ? (
                        <SpinnerMini />
                      ) : (
                        <div className="weight-blk">
                          <span
                            style={{
                              fontSize: "24px",
                              color: "#2E37A4",
                              fontWeight: "600",
                            }}
                          >
                            {patientData?.weight || "__"}
                          </span>{" "}
                          KG
                        </div>
                      )}
                    </center>
                  </div>
                  <div className="col-md-6">
                    <center>
                      {isLoading ? (
                        <SpinnerMini />
                      ) : (
                        <div className="weight-blk">
                          <span
                            style={{
                              fontSize: "24px",
                              color: "#2E37A4",
                              fontWeight: "600",
                            }}
                          >
                            {patientData?.height || "__"}
                          </span>{" "}
                          CM
                        </div>
                      )}
                    </center>
                  </div>
                </div>
                <div className="progress weight-bar">
                  <div
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                  />
                </div>
                <ul className="weight-checkit">
                  <li>Underweight</li>
                  <li>Normal (25)</li>
                  <li>Overweight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12  col-xl-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title d-inline-block">
                Appointments History
                <br />
                <br />
                <br />
              </h4>
              {/* <Link
                to="/patient/appointments"
                className="patient-views float-end"
              >
                Show all
              </Link> */}
            </div>
            <div className="card-body p-0 table-dash">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table patient-table">
                  <thead>
                    <tr>
                      <th>Doctor name</th>
                      <th>Diagnosis</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-image">
                        <img
                          width={28}
                          height={28}
                          className="rounded-circle"
                          src="assets/img/profiles/avatar-02.jpg"
                          alt=""
                        />
                        <h2>Dr.Jenny Smith</h2>
                      </td>
                      <td>Dermotology</td>
                      <td>12.05.2022 </td>
                      <td>
                        <div className="dropdown action-label">
                          <a className="custom-badge status-orange">Pending</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-image">
                        <img
                          width={28}
                          height={28}
                          className="rounded-circle"
                          src="assets/img/profiles/avatar-04.jpg"
                          alt=""
                        />
                        <h2>Andrea Lalema</h2>
                      </td>
                      <td>Dermotology</td>
                      <td>10.05.2022 </td>
                      <td>
                        <div className="dropdown action-label">
                          <a className="custom-badge status-green">Approved</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-image">
                        <img
                          width={28}
                          height={28}
                          className="rounded-circle"
                          src="assets/img/profiles/avatar-05.jpg"
                          alt=""
                        />
                        <h2>Dr.William Stephin</h2>
                      </td>
                      <td>Dermotology</td>
                      <td>12.05.2022 </td>
                      <td>
                        <div className="dropdown action-label">
                          <a className="custom-badge status-red">Cancelled</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12  col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Medicine Orders</h4>
                <Link
                  to="/patient/medicine-orders"
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
                              <th>Pharmacy Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {medicineOrders?.reverse()?.map((order, index) => (
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

        <div className="col-12 col-md-12  col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Analysis Results</h4>
                <Link
                  to="/patient/analysis-results"
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
                              <th>Analysis Number</th>
                              <th>Laboratory Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {analysisOrders
                              ?.reverse()
                              ?.reverse()
                              ?.map((analysis, index) => (
                                <AnalysisTuple
                                  analysis={analysis}
                                  key={analysis._id}
                                  analysisNumber={index + 1}
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
    </>
  );
}

export default DashboardContents;
