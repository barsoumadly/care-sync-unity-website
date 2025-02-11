

function List  ({type})  {
  return (
    <div className="page-wrapper">
      <Content name={type} />
      <Notification />
    </div>
  );
}
function Content({name}) {
  return (
    <div className="content">
      {/* Page Header */}
      <PageHeader name={name} />
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              {/* Table Header */}
              <TableHeader name={name} />
              {/* /Table Header */}
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader({name}) {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="patients.html">{name} </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">{name} List</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function TableHeader({name}) {
  return (
    <div className="page-table-header mb-2">
      <div className="row align-items-center">
        <div className="col">
          <div className="doctor-table-blk">
            <h3>{name} List</h3>
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
                      src="../images/patient/icons/search-normal.svg"
                      alt=""
                    />
                  </a>
                </form>
              </div>
              <div className="add-group">
                <a
                  href="add-patient.html"
                  className="btn btn-primary add-pluss ms-2">
                  <img src="../images/patient/icons/plus.svg" alt="" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-primary doctor-refresh ms-2">
                  <img src="../images/patient/icons/re-fresh.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto text-end float-end ms-auto download-grp">
          <a href="javascript:;" className=" me-2">
            <img src="../images/patient/icons/pdf-icon-01.svg" alt="" />
          </a>
          <a href="javascript:;" className=" me-2">
            <img src="../images/patient/icons/pdf-icon-02.svg" alt="" />
          </a>
          <a href="javascript:;" className=" me-2">
            <img src="../images/patient/icons/pdf-icon-03.svg" alt="" />
          </a>
          <a href="javascript:;">
            <img src="../images/patient/icons/pdf-icon-04.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
function Table() {
  return (
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
                  src="../images/patient/profiles/avatar-01.jpg"
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
                data-cfemail="ddb8a5bcb0adb1b89db8b0bcb4b1f3beb2b0">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-02.jpg"
                  className="rounded-circle m-r-5"
                  alt=""
                />
                Smith Bruklin
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
                data-cfemail="0c69746d617c60694c69616d6560226f6361">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-03.jpg"
                  className="rounded-circle m-r-5"
                  alt=""
                />{" "}
                William Stephin
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
                data-cfemail="4c29342d213c20290c29212d2520622f2321">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-04.jpg"
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
                data-cfemail="402538212d302c2500252d21292c6e232f2d">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-06.jpg"
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
                data-cfemail="03667b626e736f6643666e626a6f2d606c6e">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-05.jpg"
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
                data-cfemail="89ecf1e8e4f9e5ecc9ece4e8e0e5a7eae6e4">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-01.jpg"
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
                data-cfemail="f09588919d809c95b0959d91999cde939f9d">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
            <td className="profile-image">
              <a href="profile.html">
                <img
                  width={28}
                  height={28}
                  src="../images/patient/profiles/avatar-02.jpg"
                  className="rounded-circle m-r-5"
                  alt=""
                />
                Smith Bruklin
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
                data-cfemail="f4918c9599849891b49199959d98da979b99">
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
                  aria-expanded="false">
                  <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="edit-patient.html">
                    <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
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
  );
}
function Notification() {
  return (
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
  );
}

export default List