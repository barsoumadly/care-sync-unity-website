import { Link } from "react-router-dom";
import useAppointmentList from "./useAppointmentList";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import PageWrapper from "../../PageWrapper";
import { GiTakeMyMoney } from "react-icons/gi";
import NoData from "../NoData";

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
    <PageWrapper>
      <PageHeader />
      <div className="row">
        <div className="col-sm-12">
          <AppointmentCards />
        </div>
      </div>
    </PageWrapper>
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
function SearchBar() {
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

function AppointmentCards() {
  const { data: doctorInfo, isLoading } = useAppointmentList();
  console.log(doctorInfo);

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      {isLoading && <LoadingSpinner />}
      {doctorInfo ? (
        doctorInfo?.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor.id} />
        ))
      ) : (
        <NoData
          name="appointments"
          button={{
            link: "/clinic/book-appointment",
            label: "Book Appointment",
          }}
        />
      )}
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className="col-sm-6 col-md-6 col-xl-3 ">
      <Link to={`/clinic/${doctor.name}/${doctor.doctorId}`}>
        <div className="blog grid-blog">
          <div className="blog-image">
            <a>
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
                    src={doctor.profilePhoto.url}
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
                <GiTakeMyMoney />
                {doctor?.price ? doctor?.price : 0}
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
                      key={schedule?.day}
                    >
                      {schedule?.day
                        .split("")
                        .slice(0, 3)
                        .join("")
                        .toUpperCase()}
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
