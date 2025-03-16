import useProfile from "./useProfile";
import SpinnerMini from "../../../ui/SpinnerMini";
import toast from "react-hot-toast";
import useMedicineOrders from "./medicines/useMedicineOrders";
import OrderTuple from "./medicines/OrderTuple";
import AnalysisTuple from "./analysis/analysisTuple";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
import useAnalysisOrders from "./analysis/useAnalysisOrders";
import { useState } from "react";
import AppointmentTupleDashboard from "./appointments/AppointmentTupleDashboard";

const appointments = [
  {
    id: 1,
    clinicName: "Heliopolis Hospital",
    clinicId: 1,
    date: "04.10.2022",
    doctor: {
      id: "1",
      name: "Smith Bruklin",
      specialization: "Urology",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
    },

    status: "pending",
    turn: 3,
  },
  {
    id: 2,
    clinicName: "Cleopatra Hospital",
    clinicId: 2,
    date: "05.08.2023",
    doctor: {
      id: "2",
      name: "William Stephin",
      specialization: "Radiology",
      profilePhoto:
        "https://static.vecteezy.com/system/resources/previews/030/666/513/large_2x/doctor-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    },

    status: "approved",
    turn: 1,
  },
  {
    id: 4,
    clinicName: "Heliopolis Hospital",
    clinicId: 4,
    date: "07.11.2024",
    doctor: {
      id: "4",
      name: "Andrea Lalema",
      specialization: "Otolaryngology",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-04.jpg",
    },

    status: "examined",
    turn: 1,
  },
];

function DashboardContents() {
  const { data: patientData, isLoading, error } = useProfile();
  const { data: medicines, isLoading: isLoad1 } = useMedicineOrders();
  const { isLoading: isLoad2, data: analysis } = useAnalysisOrders();
  const medicineOrders = isLoad1 ? [] : [...medicines];
  const analysisOrders = isLoad2 ? [] : [...analysis];

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
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Recent Appointments</h4>
                <Link
                  to="/patient/appointments"
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
                      ) : appointments?.length !== 0 ? (
                        <table className="table border-0 custom-table comman-table datatable mb-0">
                          <thead>
                            <tr>
                              <th>Doctor Name</th>
                              <th>Clinic Name</th>
                              <th>Date</th>
                              <th>Specialization</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {appointments.map((appointment) => (
                              <AppointmentTupleDashboard
                                appointmentTuple={appointment}
                                key={appointment.id}
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
