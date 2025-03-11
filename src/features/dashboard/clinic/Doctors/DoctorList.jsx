import { useState } from "react";
import CheckChosicModal from "../reusable/CheckChosicModal";
import DoctorTableTuples from "./DoctorTableTuples";

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

  const handleOpenModal = function (id) {
    setDoctorId(id);
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
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
              <th>Specialization</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {doctorInfo.map((doctor) => (
              <DoctorTableTuples
                doctor={doctor}
                key={doctor.id}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </tbody>
        </table>
        <div>
          {isOpen && (
            <CheckChosicModal handleOpenModal={handleOpenModal} id={doctorId} />
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorList;
