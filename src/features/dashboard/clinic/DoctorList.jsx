const doctorInfo = [
  {
    id: 1,
    name: "Andrea Lalema",
    image: "../images/dashborad/profiles/avatar-01.jpg",
    specialization: "Infertility",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 2,
    name: "Smith Bruklin",
    image: "../images/dashborad/profiles/avatar-02.jpg",
    specialization: "Prostate",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 3,
    name: "William Stephin",
    image: "../images/dashborad/profiles/avatar-03.jpg",
    specialization: "Cancer",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 4,
    name: "Bernardo James",
    image: "../images/dashborad/profiles/avatar-04.jpg",
    specialization: "Prostate",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 5,
    name: "Cristina Groves",
    image: "../images/dashborad/profiles/avatar-06.jpg",
    specialization: "Prostate",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 6,
    name: "Mark Hay Smith",
    image: "../images/dashborad/profiles/avatar-05.jpg",
    specialization: "Prostate",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 7,
    name: "Andrea Lalema",
    image: "../images/dashborad/profiles/avatar-01.jpg",
    specialization: "Infertility",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
  {
    id: 8,
    name: "Smith Bruklin",
    image: "../images/dashborad/profiles/avatar-02.jpg",
    specialization: "Prostate",
    mobile: "+1 23 456890",
    email: "example@email.com",
    joiningDate: "01.10.2022",
  },
];
function DoctorList() {
  return (
    <div className="page-wrapper">
      <Content />
      <Notification />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      {/* Page Header */}
      <PageHeader />
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              {/* Table Header */}
              <TableHeader />
              {/* /Table Header */}
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="patients.html">Doctor </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">Doctor List</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function TableHeader() {
  return (
    <div className="page-table-header mb-2">
      <div className="row align-items-center">
        <div className="col">
          <div className="doctor-table-blk">
            <h3>Doctor List</h3>
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
                  href="add-patient.html"
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
        {/*  <div className="col-auto text-end float-end ms-auto download-grp">
          <a href="javascript:;" className=" me-2">
            <img src="../images/dashborad/icons/pdf-icon-01.svg" alt="" />
          </a>
          <a href="javascript:;" className=" me-2">
            <img src="../images/dashborad/icons/pdf-icon-02.svg" alt="" />
          </a>
          <a href="javascript:;" className=" me-2">
            <img src="../images/dashborad/icons/pdf-icon-03.svg" alt="" />
          </a>
          <a href="javascript:;">
            <img src="../images/dashborad/icons/pdf-icon-04.svg" alt="" />
          </a>
        </div> */}
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
            {/* <th>Department</th> */}
            <th>Specialization</th>
            {/*  <th>Degree</th> */}
            <th>Mobile</th>
            <th>Email</th>
            <th>Joining Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {doctorInfo.map((doctor) => (
            <tr key={doctor.id}>
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
                    src={doctor.image}
                    className="rounded-circle m-r-5"
                    alt=""
                  />{" "}
                  {doctor.name}
                </a>
              </td>

              <td>{doctor.specialization}</td>

              <td>
                <a href="javascript:;">{doctor.mobile}</a>
              </td>
              <td>
                <a
                  href="cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="ddb8a5bcb0adb1b89db8b0bcb4b1f3beb2b0">
                  {doctor.email}
                </a>
              </td>
              <td>{doctor.joiningDate}</td>
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
          ))}

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
export default DoctorList;
