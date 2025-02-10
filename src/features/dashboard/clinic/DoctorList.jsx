function DoctorList() {
  return <div className="page-wrapper">
  <div className="content">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="doctors.html">Doctors </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">Doctors List</li>
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
                    <h3>Doctors List</h3>
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
                              src="../images/doc/icons/search-normal.svg"
                              alt=""
                            />
                          </a>
                        </form>
                      </div>
                      <div className="add-group">
                        <a
                          href="add-doctor.html"
                          className="btn btn-primary add-pluss ms-2"
                        >
                          <img src="../images/doc/icons/plus.svg" alt="" />
                        </a>
                        <a
                          href="javascript:;"
                          className="btn btn-primary doctor-refresh ms-2"
                        >
                          <img src="../images/doc/icons/re-fresh.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto text-end float-end ms-auto download-grp">
                  <a href="javascript:;" className=" me-2">
                    <img src="../images/doc/icons/pdf-icon-01.svg" alt="" />
                  </a>
                  <a href="javascript:;" className=" me-2">
                    <img src="../images/doc/icons/pdf-icon-02.svg" alt="" />
                  </a>
                  <a href="javascript:;" className=" me-2">
                    <img src="../images/doc/icons/pdf-icon-03.svg" alt="" />
                  </a>
                  <a href="javascript:;">
                    <img src="../images/doc/icons/pdf-icon-04.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* /Table Header */}
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
                    <th>Name</th>
                    <th>Department</th>
                    <th>Specialization</th>
                    <th>Degree</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Joining Date</th>
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-01.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Andrea Lalema
                      </a>
                    </td>
                    <td>Otolaryngology</td>
                    <td>Infertility</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="adc8d5ccc0ddc1c8edc8c0ccc4c183cec2c0"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-02.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Dr.Smith Bruklin
                      </a>
                    </td>
                    <td>Urology</td>
                    <td>Prostate</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="b2d7cad3dfc2ded7f2d7dfd3dbde9cd1dddf"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-03.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Dr.William Stephin
                      </a>
                    </td>
                    <td>Radiology</td>
                    <td>Cancer</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6d08150c001d01082d08000c0401430e0200"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-04.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Bernardo James
                      </a>
                    </td>
                    <td>Dentist</td>
                    <td>Prostate</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="36534e575b465a5376535b575f5a1855595b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-06.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />
                        Cristina Groves
                      </a>
                    </td>
                    <td>Gynocolgy</td>
                    <td>Prostate</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="4b2e332a263b272e0b2e262a222765282426"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-05.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Mark Hay Smith
                      </a>
                    </td>
                    <td>Gynocolgy</td>
                    <td>Prostate</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="a5c0ddc4c8d5c9c0e5c0c8c4ccc98bc6cac8"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-01.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Andrea Lalema
                      </a>
                    </td>
                    <td>Otolaryngology</td>
                    <td>Infertility</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="bbdec3dad6cbd7defbded6dad2d795d8d4d6"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                    <td className="profile-image">
                      <a href="profile.html">
                        <img
                          width={28}
                          height={28}
                          src="../images/doc/profiles/avatar-02.jpg"
                          className="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Dr.Smith Bruklin
                      </a>
                    </td>
                    <td>Urology</td>
                    <td>Prostate</td>
                    <td>MBBS, MS</td>
                    <td>
                      <a href="javascript:;">+1 23 456890</a>
                    </td>
                    <td>
                      <a
                        href="cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c7a2bfa6aab7aba287a2aaa6aeabe9a4a8aa"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>01.10.2022</td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="edit-doctor.html">
                            <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_patient"
                          >
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
                  <span className="message-author"> Catherine Manseau </span>
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
;
}

export default DoctorList;
