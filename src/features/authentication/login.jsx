import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="col-lg-6 login-wrap-bg">
      <div className="login-wrapper">
        <div className="loginbox">
          <div className="login-right">
            <div className="login-right-wrap">
              <div className="account-logo">
                <Link to="/">
                  <img
                    src="/images/logo/care-sync-unity-logo.png"
                    alt=""
                    width={280}
                  />
                </Link>
              </div>
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
                  <span
                    onClick={() => setIsEyeOpen(!isEyeOpen)}
                    className={`profile-views feather-eye${
                      isEyeOpen ? "" : "-off"
                    } confirm-password`}
                  ></span>
                </div>
                <div className="input-block">
                  <label>
                    User Role
                    <span className="login-danger">*</span>
                  </label>
                  <select
                    className="form-control pass-input"
                    value={userType}
                    onChange={(event) => setUserType(event.target.value)}
                  >
                    <option value="CLINIC_ADMIN">Clinic Admin</option>
                    <option value="PHARMACY_ADMIN">Pharmacy Admin</option>
                    <option value="LABORATORY_ADMIN">Laboratory Admin</option>
                    <option value="Patient">Patient</option>
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
              {/* <!-- /Form --> */}

              <div className="next-sign">
                <p className="account-subtitle">
                  Need an account? <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
