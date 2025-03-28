import DashboardPageHeader from "../../DashboardPageHeader";
import SearchBar from "../../SearchBar";
import Table from "./Table";
import PatientTuples from "./PatientTuples";
import { useLocation } from "react-router-dom";

const patientList = [
  {
    id: 1,
    name: "Andrea Lalema",
    specialization: "Cardiology",
  },
  {
    id: 2,
    name: "Smith Bruklin",
    specialization: "Neurology",
  },
  {
    id: 3,
    name: "Bernardo James	",
    specialization: "Oncology",
  },
  {
    id: 4,
    name: "Bishoy Labib",
    specialization: "Orthopedics",
  },
];

function Patients() {
  const CLINIC_NAME = useLocation().pathname.split("/")[2];
  console.log(CLINIC_NAME);

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
                  <Table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientList.map((element, index) => (
                        <tr key={element.id}>
                          <PatientTuples
                            num={index}
                            element={element}
                            clinicName={CLINIC_NAME}
                            button={{
                              name: "Examination",
                              link: `/doctor/${CLINIC_NAME}`,
                            }}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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
