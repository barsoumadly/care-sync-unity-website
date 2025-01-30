import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "../features/authentication/PasswordEye";
import UserRole from "../features/authentication/UserRole";
import userRoleArr from "../data/constants";
import { login } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("PATIENT");
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const navigate = useNavigate();

  const navigateUser = function (userRole) {
    if (userRole === "CLINIC_ADMIN") {
      navigate("/clinic/dashboard");
    } else if (userRole === "PHARMACY_ADMIN") {
      navigate("/pharmacy/dashboard");
    } else if (userRole === "LABORATORY_ADMIN") {
      navigate("/laboratory/dashboard");
    } else if (userRole === "PATIENT") {
      navigate("/patient/dashboard");
    } else {
      navigate("/doctor/dashboard");
    }
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    const userCredentials = { email, password };
    const response = await login(userCredentials);
    navigateUser(response.data.user.role);
  };

  const handlePasswordEye = function (result) {
    setIsEyeOpen(result);
  };

  const handleUserRole = function (userRole) {
    setUserRole(userRole);
  };

  return (
    <>
      <h2>Login</h2>

      {/* <!-- Form --> */}
      <form onSubmit={handleSubmit}>
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

        <UserRole
          userRoleArr={userRoleArr}
          userRole={userRole}
          setUserRole={handleUserRole}
        />

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
