function Payments() {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="payments.html">Accounts </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Payments </li>
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
                        <h3>Payment List</h3>
                        <div className="doctor-search-blk">
                          <div className="top-nav-search table-search-blk">
                            <form>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here"
                              />
                              <a className="btn">
                                <img src="../images/dashborad/icons/search-normal.svg" alt="" />
                              </a>
                            </form>
                          </div>
                          <div className="add-group">
                            <a
                              href="add-payment.html"
                              className="btn btn-primary add-pluss ms-2">
                              <img src="../images/dashborad/icons/plus.svg" alt="" />
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-primary doctor-refresh ms-2">
                              <img src="../images/dashborad/icons/re-fresh.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="javascript:;" className=" me-2">
                        <img src="../images/dashborad/icons/pdf-icon-01.svg" alt="" />
                      </a>
                      <a href="javascript:;" className=" me-2">
                        <img src="../images/dashborad/icons/payment/pdf-icon-02.svg" alt="" />
                      </a>
                      <a href="javascript:;" className=" me-2">
                        <img src="../images/dashborad/icons/pdf-icon-03.svg" alt="" />
                      </a>
                      <a href="javascript:;">
                        <img src="../images/dashborad/icons/pdf-icon-04.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* /Table Header */}
                <div className="staff-search-table">
                  <form>
                    <div className="row">
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
                      <div className="col-12 col-md-6 col-xl-4 ">
                        <div className="input-block local-forms">
                          <label>Payment Status </label>
                          <select className="form-control select">
                            <option>Select Payment Status</option>
                            <option>Paid</option>
                            <option>Un Paid</option>
                            <option>Patially Paid</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 ms-auto">
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
                        <th>Invoice Number</th>
                        <th>Patient</th>
                        <th>Payment Type</th>
                        <th>Paid Date</th>
                        <th>Paid Amount</th>
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
                        <td>
                          <a href="invoice-view.html">#INV-0004</a>
                        </td>
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
                        <td>Credit Card</td>
                        <td>01.10.2022</td>
                        <td>$2450</td>
                        <td>
                          <button className="custom-badge status-green ">
                            Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0001</a>
                        </td>
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
                        <td>02.10.2022</td>
                        <td>$1505</td>
                        <td>
                          <button className="custom-badge status-pink ">
                            Un Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0002</a>
                        </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-03.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Bernardo James
                          </a>
                        </td>
                        <td>Pay Pal</td>
                        <td>01.10.2022</td>
                        <td>$2000</td>
                        <td>
                          <button className="custom-badge status-green ">
                            Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0003</a>
                        </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-04.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Mark Hay Smith
                          </a>
                        </td>
                        <td>Credit Card</td>
                        <td>05.10.2022</td>
                        <td>$1000</td>
                        <td>
                          <button className="custom-badge status-orange ">
                            Patially Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0004</a>
                        </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-05.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Galaviz Lalema
                          </a>
                        </td>
                        <td>Debit Card</td>
                        <td>01.10.2022</td>
                        <td>$2300</td>
                        <td>
                          <button className="custom-badge status-green ">
                            Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0003</a>
                        </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-06.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            Andrea Lalema
                          </a>
                        </td>
                        <td>Pay Pal</td>
                        <td>05.10.2022</td>
                        <td>$4000</td>
                        <td>
                          <button className="custom-badge status-orange ">
                            Patially Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
                        <td>
                          <a href="invoice-view.html">#INV-0005</a>
                        </td>
                        <td className="profile-image">
                          <a href="profile.html">
                            <img
                              width={28}
                              height={28}
                              src="../images/dashborad/profiles/avatar-07.jpg"
                              className="rounded-circle m-r-5"
                              alt=""
                            />{" "}
                            William Stephin
                          </a>
                        </td>
                        <td>Pay Pal</td>
                        <td>10.10.2022</td>
                        <td>$3000</td>
                        <td>
                          <button className="custom-badge status-pink ">
                            Un Paid
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="edit-payment.html">
                                <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient">
                                <i className="fa fa-trash-alt m-r-5" /> Delete
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
      <div className="notification-box">
        <div className="msg-sidebar notifications msg-noti">
          <div className="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div className="drop-scroll msg-list-scroll" id="msg_list">
            <ul className="list-box">
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item new-message">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">1 Aug</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {" "}
                        Catherine Manseau{" "}
                      </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">D</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Domenic Houston </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">B</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Buster Wigton </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Rolland Webber </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Claire Mapes </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Melita Faucher</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Jeffery Lalor</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">L</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Loren Gatlin</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Tarah Shropshire</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="chat.html">See all messages</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
