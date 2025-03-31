import { CgMoreVerticalAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import useScheduleList from "../doctor-schedule/useScheduleList";
import { useEffect } from "react";
import NoData from "../../clinic/NoData";
// const recentAppointments = [
//   {
//     name: "Saint Fatima",
//     availableDays: "Mon - Sun",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 5,
//   },
//   {
//     name: " 90th Street",
//     availableDays: "Mon - Fri",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 7,
//   },

//   {
//     name: "Heliopolis Hospital",
//     availableDays: "Web - Sun",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 6,
//   },
//   {
//     name: "Saint Fatima",
//     availableDays: "Mon - Sun",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 5,
//   },
//   {
//     name: " 90th Street",
//     availableDays: "Mon - Fri",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 7,
//   },

//   {
//     name: "Heliopolis Hospital",
//     availableDays: "Web - Sun",
//     src: "/images/clinic/clinic.jpg",
//     time: "09:00 AM - 06:00 PM",
//     noPatients: 6,
//   },
// ];
function AppointmentTable() {
  const { data: recentAppointments } = useScheduleList();
  const today = new Date().toDateString().split(" ")[0].toLowerCase();
  let data;
  useEffect(
    function () {
      data = recentAppointments?.filter(
        (appointment) => today === appointment?.day?.slice(0, 3).toLowerCase()
      );
      console.log(data);
    },
    [recentAppointments]
  );

  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
          <div className="card-header pb-0">
            <h4 className="card-title d-inline-block">Today's schedule </h4>{" "}
          </div>
          <div className="card-block table-dash">
            <div className="table-responsive">
              {data ? (
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th></th>

                      <th>Clinic name</th>
                      <th>Available Days</th>
                      <th style={{ padding: "0 20px" }}>Time</th>
                      <th>Appointments</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((clinic, index) => {
                      return (
                        today === clinic?.day?.slice(0, 3).toLowerCase() && (
                          <tr key={index}>
                            <td></td>

                            <td className="table-image">
                              <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={clinic.profilePhoto}
                                alt=""
                              />
                              <h2>{clinic.clinicName}</h2>
                            </td>
                            <td>{clinic.day}</td>
                            <td>
                              {clinic.startTime} - {clinic.endTime}
                            </td>
                            <td>{clinic.numberOfAppointments} appointments</td>
                          </tr>
                        )
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {" "}
                    <div className="main-wrapper ">
                      <div
                        style={{
                          margin: "0 auto",
                          textAlign: "center",
                          color: "#2e37a4",
                        }}
                      >
                        <img
                          src="/images/clinic/no-work.jpg"
                          alt="Logo"
                          style={{ width: "35%" }}
                        />
                        <h4>
                          There are no appointments today but be prepared.
                        </h4>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentTable;
