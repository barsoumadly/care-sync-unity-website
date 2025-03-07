import { useEffect, useState } from "react";
import { getPatientProfile } from "../../../services/patient";

function DashboardContents() {
  const [patientData, setPatientData] = useState({});

  useEffect(function () {
    const getProfile = async function () {
      const token = JSON.parse(localStorage.getItem("key"));
      const response = await getPatientProfile(token);
      setPatientData(response.data.data);
    };

    getProfile();
  }, []);

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
                <h5>
                  <br />
                  {patientData.heartRate || "__"} <span>bpm</span>
                </h5>
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
                <h5>
                  <br />
                  {patientData.temperature || "__"} <span>°C</span>
                </h5>
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
                <h5>
                  <br />
                  {patientData.bloodPressure || "__"} <span>mm/Hg</span>
                </h5>
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
                  {patientData.bloodType || "__"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12  col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>
                  Body Mass index
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
                      patientData.weight /
                        Math.pow(patientData.height * 0.01, 2)
                    ) || "__"}
                  </span>{" "}
                  KG/M<sup>2</sup>
                </h4>
              </div>
              <div className="body-mass-blk">
                <div className="row">
                  <div className="col-md-6">
                    <center>
                      <div className="weight-blk">
                        <span
                          style={{
                            fontSize: "24px",
                            color: "#2E37A4",
                            fontWeight: "600",
                          }}
                        >
                          {patientData.weight || "__"}
                        </span>{" "}
                        KG
                      </div>
                    </center>
                  </div>
                  <div className="col-md-6">
                    <center>
                      <div className="weight-blk">
                        <span
                          style={{
                            fontSize: "24px",
                            color: "#2E37A4",
                            fontWeight: "600",
                          }}
                        >
                          {patientData.height || "__"}
                        </span>{" "}
                        CM
                      </div>
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
                  <li>Normal (45.5)</li>
                  <li>Overweight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12  col-xl-15">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title d-inline-block">
                Appointments History
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
    </>
  );
}

export default DashboardContents;
