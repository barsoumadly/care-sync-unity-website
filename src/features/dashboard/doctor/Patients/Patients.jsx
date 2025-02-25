import DashboardPageHeader from "../DashboardPageHeader";
import SearchBar from "../SearchBar";
import Table from "../Table";

function Patients() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <DashboardPageHeader
            pageList={[
              { name: "Patients", link: "/doctor/dashboard" },
              { name: "Clinics List", link: "/doctor/patients" },
            ]}
            currentPage="Patient List"
          />
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table show-entire">
                <div className="card-body">
                  {/* Table Header */}
                  <SearchBar name="Patients List" />
                  {/* /Table Header */}
                  <Table
                    headElements={["Num", "Name", "Specialization"]}
                    bodyElements={[
                      ["Andrea Lalema", "Otolaryngology"],
                      ["Smith Bruklin", "Otolaryngology"],
                      ["Bernardo James", "Otolaryngology"],
                    ]}
                    button={{
                      name: "Examination",
                      link: "/doctor/patient-profile",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
