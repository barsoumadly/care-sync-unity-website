import { Link, Outlet } from "react-router-dom";

function AuthenticationLayout() {
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img
                    className="img-fluid"
                    src="/images/auth/login-02.png"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
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
                      {/* <!-- Form --> */}
                      <Outlet />
                      {/* <!-- /Form --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLayout;
