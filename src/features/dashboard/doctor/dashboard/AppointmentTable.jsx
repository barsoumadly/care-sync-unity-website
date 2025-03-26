import { CgMoreVerticalAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
const recentAppointments = [
  {
    name: "Saint Fatima",
    availableDays: "Mon - Sun",
    src: "/images/clinic/clinic.jpg",
    time: "09:00 AM - 06:00 PM",
    noPatients: 5,
  },
  {
    name: " 90th Street",
    availableDays: "Mon - Fri",
    src: "/images/clinic/clinic.jpg",
    time: "09:00 AM - 06:00 PM",
    noPatients: 7,
  },

  {
    name: "Heliopolis Hospital",
    availableDays: "Web - Sun",
    src: "/images/clinic/clinic.jpg",
    time: "09:00 AM - 06:00 PM",
    noPatients: 6,
  },
];
function AppointmentTable() {
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header pb-0">
            <h4 className="card-title d-inline-block">Appointment schedule </h4>{" "}
            <Link
              to="/doctor/doctor-shedule"
              className="float-end patient-views"
            >
              Show all
            </Link>
          </div>
          <div className="card-block table-dash">
            <div className="table-responsive">
              <table className="table mb-0 border-0 datatable custom-table">
                <thead>
                  <tr>
                    <th></th>

                    <th>Clinic name</th>
                    <th>Available Days</th>
                    <th style={{ padding: "0 50px" }}>Time</th>
                    <th>Appointments</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments?.map((patient, index) => {
                    return (
                      index < 3 && (
                        <tr>
                          <td></td>

                          <td className="table-image">
                            <img
                              width={28}
                              height={28}
                              className="rounded-circle"
                              src={patient.src}
                              alt=""
                            />
                            <h2>{patient.name}</h2>
                          </td>
                          <td>{patient.availableDays}</td>
                          <td>{patient.time}</td>
                          <td>{patient.noPatients} appointments</td>
                        </tr>
                      )
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentTable;
