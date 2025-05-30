function Reports() {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="expense-report.html">Reports </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Expense Report</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table show-entire">
              <div className="card-body">
                {/* Table Header */}
                <div className="page-table-header mb-2">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="doctor-table-blk">
                        <h3>Expense Report</h3>
                        <div className="doctor-search-blk">
                          <div className="top-nav-search table-search-blk">
                            <form>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here"
                              />
                              <a className="btn">
                                <img
                                  src="../images/dashborad/icons/search-normal.svg"
                                  alt=""
                                />
                              </a>
                            </form>
                          </div>
                          <div className="add-group">
                            <a
                              href="javascript:;"
                              className="btn btn-primary doctor-refresh ms-2"
                            >
                              <img
                                src="../images/dashborad/icons/re-fresh.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Table Header */}
                <div className="staff-search-table">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>Purchased by </label>
                          <select className="form-control select">
                            <option>Select Purchase by</option>
                            <option>Bernardo James</option>
                            <option>Galaviz Lalema</option>
                            <option>Tarah Williams </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms cal-icon">
                          <label>From </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms cal-icon">
                          <label>To </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
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
                  <table className="table border-0 custom-table comman-table datatable mb-0">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </th>
                        <th>Item</th>
                        <th>Purchase From</th>
                        <th>Purchase by</th>
                        <th>Paid by</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Anaesthetic machine</td>
                        <td>Biomedical Equipment Inc</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-01.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Andrea Lalema
                          </a>
                        </td>
                        <td>Paypal</td>
                        <td>04.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-green dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Aspiration Pump </td>
                        <td>Medi Pro Service </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-03.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />
                            William Stephin
                          </a>
                        </td>
                        <td>Cheque</td>
                        <td>08.10.2022</td>
                        <td>$2000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-pink dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Rejected
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Anaesthetic machine</td>
                        <td>Biomedical Equipment Inc</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-02.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />
                            Smith Bruklin
                          </a>
                        </td>
                        <td>Paypal</td>
                        <td>04.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-orange dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Anaesthetic machine</td>
                        <td>Biomedical Equipment Inc</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-04.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Bernardo James
                          </a>
                        </td>
                        <td>Paypal</td>
                        <td>04.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              New
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Medical Expenses</td>
                        <td>Hi-life Medicals</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-06.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />
                            Cristina Groves
                          </a>
                        </td>
                        <td>Debit Card</td>
                        <td>03.10.2022</td>
                        <td>$1600</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-green dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Anaesthetic machine</td>
                        <td>Biomedical Equipment Inc</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-05.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Mark Hay Smith
                          </a>
                        </td>
                        <td>Paypal</td>
                        <td>04.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-green dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Aspiration Pump </td>
                        <td>Medi Pro Service </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-01.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Andrea Lalema
                          </a>
                        </td>
                        <td>Cheque</td>
                        <td>06.10.2022</td>
                        <td>$4000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-pink dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Rejected
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
                          </div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check check-tables">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue="something"
                            />
                          </div>
                        </td>
                        <td>Medical Expenses </td>
                        <td>Hi-life Medicals</td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-02.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Smith Bruklin
                          </a>
                        </td>
                        <td>Debit Card</td>
                        <td>04.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-green dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                New
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pending
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Approved
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Rejected
                              </a>
                            </div>
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
  );
}

export default Reports;
