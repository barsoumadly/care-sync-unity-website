import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

function AuthenticationFrame({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();

  useEffect(
    function () {
      setIsOpen(true);
    },
    [location]
  );

  useEffect(
    function () {
      setTimeout(() => setIsOpen(false), 1000);
    },
    [isOpen]
  );

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            <div
              className="col-lg-6 login-wrap"
              style={{ width: `${isOpen ? "100%" : "50%"}` }}
            >
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
            {!isOpen && (
              <div className="col-lg-6 login-wrap-bg">
                <div className="login-wrapper">
                  <div className="loginbox">
                    <div className="login-right">
                      <div className="login-right-wrap">
                        <div className="account-logo">
                          <img
                            src="/images/logo/care-sync-unity-logo.png"
                            alt=""
                            width={280}
                          />
                        </div>
                        {/* <!-- Form --> */}

                        {children}

                        {/* <!-- /Form --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthenticationFrame;
