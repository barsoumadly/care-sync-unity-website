import { useState } from "react";
import AppointmentTuple from "./AppointmentTuple";
import AppointmentTurn from "./AppointmentTurn";

const appointments = [
  {
    id: 1,
    clinicName: "Heliopolis Hospital",
    clinicId: 1,
    date: "04.10.2022",
    doctor: {
      id: "1",
      name: "Smith Bruklin",
      specialization: "Urology",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
    },
    cost: 220,
    status: "pending",
    turn: 3,
  },
  {
    id: 2,
    clinicName: "Cleopatra Hospital",
    clinicId: 2,
    date: "05.08.2023",
    doctor: {
      id: "2",
      name: "William Stephin",
      specialization: "Radiology",
      profilePhoto:
        "https://static.vecteezy.com/system/resources/previews/030/666/513/large_2x/doctor-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    },
    cost: 260,
    status: "approved",
    turn: 1,
  },
  {
    id: 3,
    clinicName: "Cleopatra Hospital",
    clinicId: 3,
    date: "08.11.2024",
    doctor: {
      id: "3",
      name: "Cristina Groves",
      specialization: "Cuticula",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg",
    },
    cost: 320,
    status: "declined",
    turn: 0,
  },
  {
    id: 4,
    clinicName: "Heliopolis Hospital",
    clinicId: 4,
    date: "07.11.2024",
    doctor: {
      id: "4",
      name: "Andrea Lalema",
      specialization: "Otolaryngology",
      profilePhoto:
        "https://preclinic.dreamstechnologies.com/html/template/assets/img/profiles/avatar-04.jpg",
    },
    cost: 300,
    status: "examined",
    turn: 1,
  },
];

function Appointments() {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentTurn, setAppointmentTurn] = useState(null);

  const handleOpenModal = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleChangeAppointmentTurn = function (turnValue) {
    setAppointmentTurn(turnValue);
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={isOpen ? { filter: "blur(3px)" } : {}}
      >
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
                                <option>Examined</option>
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
                            <th>Clinic Name</th>
                            <th>Date</th>
                            <th>Specialization</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map((appointment) => (
                            <AppointmentTuple
                              appointmentTuple={appointment}
                              onOpenModal={handleOpenModal}
                              onChangeAppointmentTurn={
                                handleChangeAppointmentTurn
                              }
                              key={appointment.id}
                            />
                          ))}
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
      <div>
        {isOpen && (
          <AppointmentTurn
            appointmentTurn={appointmentTurn}
            onOpenModal={handleOpenModal}
          />
        )}
      </div>
    </>
  );
}

export default Appointments;
