import { Link, useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = "error";

  return (
    <div className="error-pages">
      <div className="main-wrapper error-wrapper">
        <div className="error-box">
          <img
            className="img-fluid"
            src="/images/error/error-01.png"
            alt="Logo"
          />
          <h3>
            <img
              className="img-fluid mb-0"
              src="/images/error/icons/danger.svg"
              alt="Logo"
            />
            {error.statusText}
          </h3>
          <p>You may have mistyped the address or the page may have moved.</p>
          <Link to="/" className="btn btn-primary go-home">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
