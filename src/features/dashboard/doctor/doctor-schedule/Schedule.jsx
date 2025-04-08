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
          <span className="time">{scheduleData?.schedule[0]?.date}</span>
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
                {scheduleData?.schedule.map((schedule) => (
                  <div className="date-posts" key={schedule?._id}>
                    <h5>{schedule?.day}</h5>
                    <span className="ms-2">
                      {formatTime(schedule.startTime)} -{" "}
                      {formatTime(schedule?.endTime)}
                    </span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <div>
            <Link
              to={`/doctor/${scheduleData?.clinicName}/${scheduleData?.clinicId}/patient-list`}
              className="read-more d-flex"
              style={{
                marginTop: "15px",
                fontSize: " 12px",
                color: "#2e37a4",
              }}
            >
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
