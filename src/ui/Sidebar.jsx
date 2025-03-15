import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../services/auth";
import { useState } from "react";

function Sidebar({ minbar, showbar, children }) {
  const { userLogout } = useAuth();

  const [ishover, sethover] = useState(true);

  function MouseOver() {
    sethover(false);
  }
  function MouseOut() {
    sethover(true);
  }

  return (
    <div className={minbar && ishover ? "mini-sidebar" : ""}>
      <div
        className="sidebar"
        id="sidebar"
        style={{ marginLeft: `${showbar ? "0px" : "-225px"}` }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        <div className="sidebar-inner slimscroll scroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              {children}
            </ul>
            <div className="logout-btn">
              <NavLink
                replace={true}
                className="link"
                onClick={() => {
                  userLogout();
                  logout();
                }}
              >
                <span className="menu-side">
                  <img src="/images/dashborad/icons/logout.svg" alt="" />
                </span>
                <span>Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
