import { Link } from "react-router-dom";
import formatTime from "../../../../utils/formatTime";
import usePatientList from "../Patients/PatientList/usePatientList";
function increaseTime(time) {
  if (!time) return;
  let date = time?.split(":");
  if (date[1] === "00") date = [date[0], "30"];
  else if (date[1] === "30") date = [+date[0] + 1, "00"];

  return date.join(":");
}

function RecentAppointments({ clinic, isLoading, time }) {
  return (
    <div className="col-12 col-lg-12 col-xl-5 d-flex">
      <div className="card flex-fill comman-shadow">
        <div className="card-header">
          {" "}
          <h4 className="card-title d-inline-block">Recent Appointments</h4>
          {clinic ? (
            <Link
              to="/doctor/patients"
              className="link patient-views float-end"
            >
              Show all
            </Link>
          ) : null}
        </div>

        <div className="card-body">
          {clinic !== undefined ? (
            clinic?.map((clinic) => (
              <PatientRow clinic={clinic} time={time} key={clinic?.clinicId} />
            ))
          ) : (
            <NoRecentAppointment />
          )}
        </div>
      </div>
    </div>
  );
}

function PatientRow({ clinic, time }) {
  const { data: patients } = usePatientList(clinic?.clinicId);
  const patientTime = [];
  let newTime = time;

  patients?.map((patient, index) => {
    if (index === 0) patientTime.push(time);
    else if (index < 3) {
      newTime = increaseTime(newTime);
      patientTime.push(newTime);
    }
  });
  return (
    <div>
      <div className="teaching-card">
        <ul className="steps-history">
          <li></li>
        </ul>
        <ul className="activity-feed">
          <li className="feed-item d-flex align-items-center">
            <div className="dolor-activity hide-activity">
              <ul className="doctor-date-list mb-2">
                <li className="dropdown ongoing-blk">
                  <a
                    href="#"
                    className="dropdown-toggle active-doctor"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fas fa-circle me-2 active-circles" />
                    {formatTime(time)}
                    <span> {clinic?.clinicName}</span>
                    <span className="ongoing-drapt">
                      Ongoing
                      <i className="feather-chevron-down ms-2" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="teaching-card">
        <ul className="steps-history">
          <li> {formatTime(time)}</li>
        </ul>
        <ul className="activity-feed">
          <li className="feed-item d-flex align-items-center">
            <div className="dolor-activity">
              <ul className="doctor-date-list mb-2">
                {patients?.map(
                  (patient, index) =>
                    index < 3 && (
                      <li key={patient?._id}>
                        <i className="fas fa-circle me-2" />
                        {formatTime(patientTime?.[index])}
                        <span>{patient?.guestName}</span>
                      </li>
                    )
                )}
              </ul>
            </div>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}

function NoRecentAppointment() {
  return (
    <div className="card card-table show-entire">
      <div className="card-body">
        {" "}
        <div className="main-wrapper ">
          <div
            style={{
              margin: "10% auto",
              textAlign: "center",
              color: "#2e37a4",
            }}
          >
            <img
              src="/images/clinic/no-work.jpg"
              alt="Logo"
              style={{ width: "36%" }}
            />
            <h4>There are no recent appointments today</h4>{" "}
            <p>But be prepared</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default RecentAppointments;
