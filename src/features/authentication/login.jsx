import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "./PasswordEye";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Patient");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    const userCredentials = { email, password, userType };
    navigate("/");
  };

  const handlePasswordEye = function (result) {
    setIsEyeOpen(result);
  };

  return (
    <>
      <h2>Login</h2>

      {/* <!-- Form --> */}
      <form action="index.html" onSubmit={handleSubmit}>
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
            type={`${isEyeOpen ? "text" : "password"}`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <PasswordEye isEyeOpen={isEyeOpen} setIsEyeOpen={handlePasswordEye} />
        </div>
        <div className="input-block">
          <label>
            User Role <span className="login-danger">*</span>
          </label>
          <select
            className="form-control pass-input"
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
          >
            <option value="CLINIC_ADMIN">Clinic Admin</option>
            <option value="PHARMACY_ADMIN">Pharmacy Admin</option>
            <option value="LABORATORY_ADMIN">Laboratory Admin</option>
            <option value="PATIENT">Patient</option>
            <option value="DOCTOR">Doctor</option>
          </select>
        </div>
        <div className="forgotpass">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="input-block login-btn">
          <button className="btn btn-primary btn-block" type="submit">
            Login
          </button>
        </div>
      </form>
      {/* <!-- Form --> */}

      <div className="next-sign">
        <p className="account-subtitle">
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
