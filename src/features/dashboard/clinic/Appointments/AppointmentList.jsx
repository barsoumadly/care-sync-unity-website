import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import AppointmentTableTuples from "./AppointmentTableTuples";
import CheckChosicModal from "../reusable/CheckChosicModal";
import useAppointmentList from "./useAppointmentList";

// const doctorInfo = [
//   {
//     id: 1,
//     name: "Andrea Lalema",
//     image: "../images/dashborad/profiles/avatar-01.jpg",
//     department: "Otolaryngology",
//     specialization: "Infertility",
//     NumberOfAppointments: 10,
//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 2,
//     name: "Smith Bruklin",
//     image: "../images/dashborad/profiles/avatar-02.jpg",
//     department: "Urology",
//     specialization: "Prostate",
//     NumberOfAppointments: 10,
//     days: "tue,wed,thu,sat",
//   },
//   {
//     id: 3,
//     name: "William Stephin",
//     image: "../images/dashborad/profiles/avatar-03.jpg",
//     department: "Radiology",
//     specialization: "Cancer",
//     NumberOfAppointments: 10,

//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 4,
//     name: "Bernardo James",
//     image: "../images/dashborad/profiles/avatar-04.jpg",
//     department: "Dentist",
//     specialization: "Prostate",
//     NumberOfAppointments: 10,

//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 5,
//     name: "Cristina Groves",
//     image: "../images/dashborad/profiles/avatar-06.jpg",
//     department: "Gynocolgy",
//     specialization: "Prostate",
//     NumberOfAppointments: 10,

//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 6,
//     name: "Mark Hay Smith",
//     image: "../images/dashborad/profiles/avatar-05.jpg",
//     department: "Gynocolgy",
//     specialization: "Prostate",
//     NumberOfAppointments: 10,

//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 7,
//     name: "Andrea Lalema",
//     image: "../images/dashborad/profiles/avatar-01.jpg",
//     department: "Otolaryngology",
//     specialization: "Infertility",
//     NumberOfAppointments: 10,

//     days: "sun,mon,tue,wed,thu,fri,sat",
//   },
//   {
//     id: 8,
//     name: "Smith Bruklin",
//     image: "../images/dashborad/profiles/avatar-02.jpg",
//     department: "Urology",
//     specialization: "Prostate",
//     NumberOfAppointments: 10,

//     days: "tue,wed,thu,sat",
//   },
// ];

function AppointmentList() {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <PageHeader />
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            {/* <div className="card card-table show-entire">
              <div className="card-body"> */}
            {/* Table Header */}
            <TableHeader />
            {/* /Table Header */}
            <Table />
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="patients.html">Appointment </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">Appointment List</li>
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
            <h3>Appointment List</h3>
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
                  className="btn btn-primary add-pluss ms-2"
                >
                  <img src="../images/dashborad/icons/plus.svg" alt="" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-primary doctor-refresh ms-2"
                >
                  <img src="../images/dashborad/icons/re-fresh.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorId, setDoctorId] = useState(false);
  const { data: doctorInfo } = useAppointmentList();

  const handleOpenModal = function (id) {
    setDoctorId(id);
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      {doctorInfo?.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor.id} />
      ))}
    </div>

    // <>
    //   <div className="table-responsive">
    //     <table className="table border-0 custom-table comman-table datatable mb-0">
    //       <thead>
    //         <tr>
    //           <th>
    //             <div className="form-check check-tables">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue="something"
    //               />
    //             </div>
    //           </th>
    //           <th>Name</th>
    //           <th>Specialization</th>
    //           <th>Number of Appointments</th>
    //           <th>Days</th>
    //           <th />
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {doctorInfo?.map((doctor) => (
    //           <AppointmentTableTuples
    //             doctor={doctor}
    //             key={doctor.id}
    //             handleOpenModal={handleOpenModal}
    //           />
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   {isOpen && (
    //     <CheckChosicModal handleOpenModal={handleOpenModal} id={doctorId} />
    //   )}
    // </>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className="col-sm-6 col-md-6 col-xl-3">
      <Link to={`/clinic/${doctor.name}/${doctor.doctorId}`}>
        <div className="blog grid-blog">
          <div className="blog-image">
            <a href="blog-details.html">
              <img
                className="img-fluid"
                src="/images/clinic/clinic.jpg"
                alt=""
              />
            </a>
            <div className="blog-views">
              <h5>{doctor.specialization}</h5>
            </div>
            <ul className="nav view-blog-list blog-views">
              <li>
                <i className="feather-message-square me-1" />
                {doctor.appointmentCount}
              </li>
            </ul>
          </div>
          <div className="blog-content">
            <div className="blog-grp-blk">
              <div className="blog-img-blk">
                <a>
                  <img
                    className="img-fluid"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    alt=""
                  />
                </a>
                <div className="content-blk-blog ms-2">
                  <h4>
                    <a href="profile.html">{doctor.name}</a>
                  </h4>
                  <h5>{doctor.specialization}</h5>
                </div>
              </div>
              <span>
                <i className="feather-calendar me-1" />
                05 Sep 2022
              </span>
            </div>
            <h4 className="blog-title">
              <a href="blog-details.html">Doctor's appointments:</a>
            </h4>
            {doctor.workingDays.map((schedule) => {
              return (
                <>
                  {schedule?.day && (
                    <div
                      className={`custom-badge status-pink`}
                      style={{ margin: "5px", minWidth: "0" }}
                    >
                      {schedule?.day}
                    </div>
                  )}
                </>
              );
            })}
            <Link to={`/clinic/${doctor.name}/${doctor.doctorId}`}>
              <a className="read-more d-flex" style={{ marginTop: "15px" }}>
                {" "}
                Read more about {doctor.appointmentCount} appointments
                <i className="fa fa-long-arrow-right ms-2" />
              </a>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AppointmentList;
