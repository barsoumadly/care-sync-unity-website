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
              src="/images/clinic/no-data.jpg"
              alt="Logo"
            />
            <h3>
              <img
                className="img-fluid mb-0"
                src="/images/error/icons/danger.svg"
                alt="Logo"
              />{" "}
              No data found
            </h3>
            <p>There is no data about the {name}. Please add a new doctor.</p>
            {button && (
              <Link to={button.link}>
                {" "}
                <button className="btn btn-primary go-home">
                  {button.label}
                </button>
              </Link>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default NoData;
