function EmployeeSalary() {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="salary.html">Payroll </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Empoyee Salary</li>
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
                        <h3>Empoyee Salary</h3>
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
                              href="add-salary.html"
                              className="btn btn-primary add-pluss ms-2">
                              <img
                                src="../images/dashborad/icons/plus.svg"
                                alt=""
                              />
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-primary doctor-refresh ms-2">
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
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>Employee Name </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>Role </label>
                          <select className="form-control select">
                            <option>Select Role</option>
                            <option>Accountant</option>
                            <option>Nurse</option>
                            <option>Pharmacist </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>Leave Status </label>
                          <select className="form-control select">
                            <option>Select Leave Status</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms cal-icon">
                          <label>From </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms cal-icon">
                          <label>To </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="doctor-submit">
                          <button
                            type="submit"
                            className="btn btn-primary submit-list-form me-2">
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
                        <th>Employee ID</th>
                        <th>Employee Name</th>

                        <th>Joining Date</th>
                        <th>Role</th>
                        <th>Salary</th>

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
                        <td>EID-001</td>
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

                        <td>01.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Nurse
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$1000</td>
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
                        <td>EID-002</td>
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

                        <td>03.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Accountant
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$2000</td>

                        <td className="text-end"></td>
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
                        <td>EID-003</td>
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

                        <td>04.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Pharmacist
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$1500</td>

                        <td className="text-end"></td>
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
                        <td>EID-004</td>
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

                        <td>06.06.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Nurse
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$3000</td>

                        <td className="text-end"></td>
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
                        <td>EID-005</td>
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

                        <td>13.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Accountant
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$5000</td>

                        <td className="text-end"></td>
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
                        <td>EID-006</td>
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

                        <td>11.12.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Pharmacist
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$2000</td>

                        <td className="text-end"></td>
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
                        <td>EID-007</td>
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

                        <td>01.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Accountant
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$1000</td>
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
                        <td>EID-008</td>
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
                        <td>01.05.2020</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="custom-badge status-purple dropdown-toggle"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Nurse
                            </a>
                            <div className="dropdown-menu dropdown-menu-end status-staff">
                              <a className="dropdown-item" href="javascript:;">
                                Nurse
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Accountant
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                Pharmacist
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$2000</td>
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

export default EmployeeSalary;
