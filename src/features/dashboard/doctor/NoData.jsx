import { Link } from "react-router-dom";

function NoData({ name, button }) {
  return (
    <div className="card card-table show-entire">
      <div className="card-body">
        {" "}
        <div className="main-wrapper ">
          <div className="error-box">
            <img
              className="img-fluid"
              src="/images/clinic/no-work.jpg"
              alt="Logo"
            />
            <h4>There are no appointments yet.</h4>
            <p>But be prepared</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default NoData;
