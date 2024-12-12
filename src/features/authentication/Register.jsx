import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordEye from "./PasswordEye";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isEyeOpen1, setIsEyeOpen1] = useState(false);
  const [isEyeOpen2, setIsEyeOpen2] = useState(false);
  const [userType, setUserType] = useState("Patient");

  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setErrorMessage(true);
    }

    const userData = { fullname, email, password, userType };
    navigate("/login");
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
              <h2>Getting Started</h2>
              {/* <!-- Form --> */}
              <form action="login.html" onSubmit={handleSubmit}>
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
                    setIsEyeOpen={setIsEyeOpen1}
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
                    setIsEyeOpen={setIsEyeOpen2}
                  />
                  {errorMessage && <p>Password are not same</p>}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
