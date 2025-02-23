import { Link } from "react-router-dom";

function DashboardPageHeader({ pageList, currentPage }) {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            {pageList.map((page, index) => (
              <PageHeader id={index} name={page.name} link={page.link} />
            ))}
            <li className="breadcrumb-item active">{currentPage}</li>
          </ul>
        </div>
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
