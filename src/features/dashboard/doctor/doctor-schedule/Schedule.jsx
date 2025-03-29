import { Link } from "react-router-dom";

function Schedule({ scheduleData }) {
  return (
    <li>
      <div className="activity-user">
        <a title="Mike Litorus" className="avatar">
          <img
            alt="Mike Litorus"
            src={scheduleData.avatar}
            className="img-fluid rounded-circle"
          />
        </a>
      </div>
      <div className="activity-content timeline-group-blk">
        <div className="timeline-group flex-shrink-0">
          <h4>{scheduleData.name}</h4>
          <span className="time">{scheduleData.date}</span>
        </div>
        <div className="comman-activitys flex-grow-1">
          <h3>
            {scheduleData.name}
            <span>
              {" "}
              You have {scheduleData.appointmentNum} appointments today
            </span>
          </h3>
          <p>Address: {scheduleData.address}</p>
          <ul className="latest-posts latest-posts-act mt-2">
            <li>
              <div className="post-thumb">
                <div className="link">
                  <img className="img-fluid" src={scheduleData.avatar} />
                </div>
              </div>
              <div className="post-info">
                {scheduleData?.time?.map((time) => (
                  <div className="date-posts">
                    <h5>{time.day}</h5>
                    <span className="ms-2">{time.startTime}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <div>
            <Link to={`/doctor/${scheduleData.name}/patient-list`}>
              <a
                className="read-more d-flex"
                style={{
                  marginTop: "15px",
                  fontSize: " 12px",
                }}
              >
                {" "}
                Read more {scheduleData.appointmentNum} patients
                <i className="fa fa-long-arrow-right ms-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Schedule;
