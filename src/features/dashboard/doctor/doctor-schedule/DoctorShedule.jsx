import { data, Link } from "react-router-dom";
import Schedule from "./Schedule";
const scheduleData = [
  {
    id: 1,
    name: "Saint Fatima",
    date: "25/4/2023",
    avatar: "/images/clinic/clinic.jpg",
    appointmentNum: "5",
    address:
      "3 Omar Bakir Street, Airport, El Nozha District, Cairo Governorate",
    time: [
      { day: "Su", startTime: "01:00 PM" },
      { day: "Mo", startTime: "06:00 PM" },
    ],
  },
  {
    id: 2,
    name: "90th Street",
    date: "5/6/2021",
    avatar: "/images/clinic/clinic.jpg",
    appointmentNum: "10",
    address:
      "3 Omar Bakir Street, Airport, El Nozha District, Cairo Governorate",
    time: [
      { day: "Tu", startTime: "03:00 PM" },
      { day: "Th", startTime: "08:00 PM" },
    ],
  },
  {
    id: 3,
    name: "Heliopolis Hospital",
    date: "3/11/2020",
    avatar: "/images/clinic/clinic.jpg",
    appointmentNum: "20",
    address:
      "3 Omar Bakir Street, Airport, El Nozha District, Cairo Governorate",
    time: [
      { day: "Sa", startTime: "08:00 AM" },
      { day: "Su", startTime: "08:00 AM" },
      { day: "Mo", startTime: "08:00 AM" },
      { day: "We", startTime: "08:00 AM" },
    ],
  },
];
function DoctorShedule() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="activites.html">Doctor </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Doctor shedule</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="activity">
                    <div className="activity-box">
                      <ul className="activity-list">
                        {scheduleData.map((sch) => (
                          <Schedule scheduleData={sch} key={sch.id} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorShedule;
