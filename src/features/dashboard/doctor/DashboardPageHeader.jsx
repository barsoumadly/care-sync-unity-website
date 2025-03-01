import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/auth";
import { useAuth } from "../../../context/AuthContext";

function DashboardPageHeader({ pageList, currentPage, button = "Go Back" }) {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  return (
    <div className="row" style={{ fontWeight: "500" }}>
      <div className="col-sm-7 col-6 headerpage">
        <ul className="breadcrumb">
          {pageList.map((page, index) => (
            <PageHeader key={index} name={page.name} link={page?.link} />
          ))}
          <li className="breadcrumb-item active">{currentPage}</li>
        </ul>{" "}
      </div>
      <div className="col-sm-5 col-6 text-end">
        {button === "Logout" ? (
          <Link
            onClick={() => {
              userLogout();
              logout();
            }}
            class="btn btn-primary btn-rounded"
          >
            <IoArrowBackOutline /> Logout
          </Link>
        ) : (
          <button onClick={handleBack} className="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> {button}
          </button>
        )}
      </div>
    </div>
  );
}

export default DashboardPageHeader;

function PageHeader({ name, link }) {
  return (
    <>
      <li className="breadcrumb-item">
        <Link to={link}>{name}</Link>
      </li>

      <li className="breadcrumb-item">
        <i className="feather-chevron-right" />
      </li>
    </>
  );
}
