import { Link } from "react-router-dom";

function Login() {
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
              <form action="index.html">
                <div className="input-block">
                  <label>
                    Email <span className="login-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="input-block">
                  <label>
                    Password <span className="login-danger">*</span>
                  </label>
                  <input className="form-control pass-input" type="password" />
                  <span className="profile-views feather-eye-off toggle-password"></span>
                </div>
                <div className="forgotpass">
                  <div className="remember-me">
                    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                      Remember me
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
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
