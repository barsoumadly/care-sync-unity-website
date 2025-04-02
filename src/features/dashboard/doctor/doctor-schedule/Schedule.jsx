import { Link } from "react-router-dom";
import formatTime from "../../../../utils/formatTime";

function Schedule({ scheduleData }) {
  return (
    <li>
      <div className="activity-user">
        <a className="avatar">
          <img
            alt="Mike Litorus"
            src={scheduleData?.profilePhoto}
            className="img-fluid rounded-circle"
          />
        </a>
      </div>
      <div className="activity-content timeline-group-blk">
        <div className="timeline-group flex-shrink-0">
          <h4>{scheduleData?.clinicName}</h4>
          <span className="time">{scheduleData?.date}</span>
        </div>
        <div className="comman-activitys flex-grow-1">
          <h3>
            {scheduleData?.clinicName}
            <span>
              {" "}
              You have {scheduleData?.numberOfAppointments} appointments
            </span>
          </h3>
          <p>
            Address: {scheduleData?.clinicAddress?.address},{" "}
            {scheduleData?.clinicAddress?.city}
          </p>
          <ul className="latest-posts latest-posts-act mt-2">
            <li>
              <div className="post-thumb">
                <div className="link">
                  <img className="img-fluid" src={scheduleData?.profilePhoto} />
                </div>
              </div>
              <div className="post-info">
                <div className="date-posts">
                  <h5>{scheduleData?.day}</h5>
                  <span className="ms-2">
                    {formatTime(scheduleData.startTime)} -{" "}
                    {formatTime(scheduleData?.endTime)}
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <Link
              to={`/doctor/${scheduleData?.clinicName}/patient-list`}
              className="read-more d-flex"
              style={{
                marginTop: "15px",
                fontSize: " 12px",
              }}
            >
              {" "}
              Read more {scheduleData?.numberOfAppointments} patients
              <i className="fa fa-long-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Schedule;
