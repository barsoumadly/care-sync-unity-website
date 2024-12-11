import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    const userEmail = { email };
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
              <h2>Reset Password</h2>
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
                <div className="input-block login-btn">
                  <button className="btn btn-primary btn-block" type="submit">
                    Reset Password
                  </button>
                </div>
              </form>
              {/* <!-- /Form --> */}

              <div className="next-sign">
                <p className="account-subtitle">
                  Need an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
