import { Link } from "react-router-dom";

function DashboardContents() {
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
                  110 <span>bpm</span>
                </h5>
                <p>
                  <span className="passive-view">
                    <i className="feather-arrow-up-right me-1" />
                    40%
                  </span>{" "}
                  vs last month
                </p>
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
                  38.6 <span>c</span>
                </h5>
                <p>
                  <span className="negative-view">
                    <i className="feather-arrow-down-right me-1" />
                    -20%
                  </span>{" "}
                  vs last month
                </p>
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
                  120 <span>mm/Hg</span>
                </h5>
                <p>
                  <span className="negative-view">
                    <i className="feather-arrow-down-right me-1" />
                    -40%
                  </span>{" "}
                  vs last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-xl-7">
          <div className="row">
            <div className="col-12 col-md-12  col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Medical History</h4>{" "}
                  <Link
                    to="/patient/appointments"
                    className="patient-views float-end"
                  >
                    Show all
                  </Link>
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
                            <div class="dropdown action-label">
                              <a class="custom-badge status-orange">Pending</a>
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
                            <div class="dropdown action-label">
                              <a class="custom-badge status-green">Approved</a>
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
                            <div class="dropdown action-label">
                              <a class="custom-badge status-red">Cancelled</a>
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
        </div>
      </div>
    </>
  );
}

export default DashboardContents;
