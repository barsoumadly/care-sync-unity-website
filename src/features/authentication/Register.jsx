import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "./PasswordEye";
import ErrorMessage from "./ErrorMessage";
import userRoleArr from "../../data/constants";
import UserRole from "./UserRole";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("PATIENT");

  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords are not same");
      return setIsVisible(true);
    }

    const userData = { fullname, email, password, userRole };
    navigate("/login");
  };

  const handlePasswordEye1 = function (result) {
    setIsEyeOpen1(result);
  };

  const handlePasswordEye2 = function (result) {
    setIsEyeOpen2(result);
  };

  const handleUserRole = function (userRole) {
    setUserRole(userRole);
  };

  return (
    <>
      <h2>Getting Started</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label>
            Full Name <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label>
            Email <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label>
            Password <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input"
            type={`${isEyeOpen1 ? "text" : "password"}`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <PasswordEye
            isEyeOpen={isEyeOpen1}
            setIsEyeOpen={handlePasswordEye1}
          />
        </div>

        <div className="input-block">
          <label>
            Confirm Password
            <span className="login-danger">*</span>
          </label>
          <input
            className="form-control pass-input-confirm"
            type={`${isEyeOpen2 ? "text" : "password"}`}
            value={confirmPassword}
            onChange={(event) => setconfirmPassword(event.target.value)}
            required
          />
          <PasswordEye
            isEyeOpen={isEyeOpen2}
            setIsEyeOpen={handlePasswordEye2}
          />
        </div>

        <UserRole
          userRoleArr={userRoleArr.slice().splice(0, 4)}
          userRole={userRole}
          setUserRole={handleUserRole}
        />

        <ErrorMessage errorMessage={errorMessage} isVisible={isVisible} />
        <div className="input-block login-btn">
          <button className="btn btn-primary btn-block" type="submit">
            Sign up
          </button>
        </div>
      </form>
      {/* <!-- /Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
