import { useMoveBack } from "../hooks/useMoveBack";
function PageNotFound() {
  const error = "error";
  const moveBack = useMoveBack();
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
          <button onClick={moveBack} className="btn btn-primary go-home">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
