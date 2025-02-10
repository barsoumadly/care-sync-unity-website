import { useMoveBack } from "../hooks/useMoveBack";

function ServerDown() {
  const moveBack = useMoveBack();

  return (
    <div className="main-wrapper error-wrapper">
      <div className="error-box">
        <img
          className="img-fluid"
          src="https://preclinic.dreamstechnologies.com/html/template/assets/img/error-02.png"
          alt="Logo"
        />
        <h3>
          <img
            className="img-fluid mb-0"
            src="https://preclinic.dreamstechnologies.com/html/template/assets/img/icons/danger.svg"
            alt="Logo"
          />{" "}
          Internal Server Error
        </h3>
        <p>You do not have permission to view this resource</p>
        <button onClick={moveBack} className="btn btn-primary go-home">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ServerDown;
