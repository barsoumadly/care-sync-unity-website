import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../services/auth";

function Sidebar({ minbar, showbar, children }) {
  const { userLogout } = useAuth();

  return (
    <div className={minbar ? "mini-sidebar" : ""}>
      <div
        className="sidebar"
        id="sidebar"
        style={{ marginLeft: `${showbar ? "0px" : "-225px"}` }}
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
