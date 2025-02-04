function Appointments() {
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
                    <a>Appointment</a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Appointment List</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* /Table Header */}
                  <div className="staff-search-table">
                    <form>
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="input-block local-forms">
                            <label>Doctor Name </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="input-block local-forms">
                            <label>Appointment Status </label>
                            <select className="form-control select">
                              <option>Pending</option>
                              <option>Approved</option>
                              <option>Declined</option>
                              <option>New</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
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
                    <table className="table border-0 custom-table comman-table datatable mb-0">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Date</th>
                          <th>Reason</th>
                          <th>Cost</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="profile-image">
                            <a href="profile.html">
                              <img
                                width={28}
                                height={28}
                                src="assets/img/profiles/avatar-02.jpg"
                                className="rounded-circle m-r-5"
                                alt=""
                              />
                              Smith Bruklin
                            </a>
                          </td>
                          <td>04.10.2022</td>
                          <td>Cuticula</td>
                          <td>220 EGP</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="custom-badge status-orange">
                                Pending
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="profile-image">
                            <a href="profile.html">
                              <img
                                width={28}
                                height={28}
                                src="assets/img/profiles/avatar-02.jpg"
                                className="rounded-circle m-r-5"
                                alt=""
                              />
                              William Stephin
                            </a>
                          </td>
                          <td>05.08.2023</td>
                          <td>Cuticula</td>
                          <td>260 EGP</td>
                          <td>
                            <div className="dropdown action-label">
                              <a class="custom-badge status-pink">Declined</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="profile-image">
                            <a href="profile.html">
                              <img
                                width={28}
                                height={28}
                                src="assets/img/profiles/avatar-02.jpg"
                                className="rounded-circle m-r-5"
                                alt=""
                              />
                              Bernardo James
                            </a>
                          </td>
                          <td>12.09.2024</td>
                          <td>Cuticula</td>
                          <td>200 EGP</td>
                          <td>
                            <div className="dropdown action-label">
                              <a class="custom-badge status-green">Approved</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="profile-image">
                            <a href="profile.html">
                              <img
                                width={28}
                                height={28}
                                src="assets/img/profiles/avatar-02.jpg"
                                className="rounded-circle m-r-5"
                                alt=""
                              />
                              Cristina Groves
                            </a>
                          </td>
                          <td>08.11.2024</td>
                          <td>Cuticula</td>
                          <td>320 EGP</td>
                          <td>
                            <div className="dropdown action-label">
                              <a class="custom-badge status-purple">New</a>
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
    </div>
  );
}

export default Appointments;
