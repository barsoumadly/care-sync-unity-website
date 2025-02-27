import { useAuth } from "../../../context/AuthContext";
import DashboardContents from "./DashboardContents";

function PatientDashboard() {
  const { user } = useAuth();
  const hour = new Date().getHours();

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">My Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="good-morning-blk">
            <div className="row">
              <div className="col-md-6">
                <div className="morning-user">
                  <h2>
                    {hour < 12
                      ? "Good Morning, "
                      : hour < 17
                      ? "Good Afternoon, "
                      : "Good Evening, "}
                    <span>{user.name}</span>
                  </h2>
                  <p>Have a nice day</p>
                </div>
              </div>
              <div className="col-md-6 position-blk">
                <div className="morning-img">
                  <img
                    src="https://preclinic.dreamstechnologies.com/html/template/assets/img/morning-img-03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <DashboardContents />
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
