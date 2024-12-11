import { Outlet } from "react-router-dom";

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
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLayout;
