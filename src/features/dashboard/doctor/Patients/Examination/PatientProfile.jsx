import DashboardPageHeader from "../../DashboardPageHeader";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import AboutOfPatient from "./AboutOfPatient";
import StaticOfHealth from "./StaticOfHealth";
import Examination from "./Examination";
import MedicalHistory from "./MedicalHistory";
import { useLocation } from "react-router-dom";
import usePatientData from "./usePatientData";

function PatientProfile() {
  const DATA = useLocation().pathname.split("/");
  const CLINIC_NAME = DATA[2];
  const id = DATA[3];
  const { data: patientData } = usePatientData(id);

  console.log(patientData);

  const [option, setOption] = useState(1);
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <DashboardPageHeader
            pageList={[
              { name: "Patients", link: "/doctor/dashboard" },
              { name: "Clinics List", link: "/doctor/patients" },
              { name: "Patient List", link: "/doctor/patient-list" },
            ]}
            currentPage="Patient Profile"
          />

          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <ProfileHeader data={patientData} />

              <div className="row">
                <div className="col-lg-4">
                  <AboutOfPatient data={patientData} />
                  <StaticOfHealth data={patientData} />
                </div>
                <div className="col-lg-8">
                  <div className="doctor-personals-grp">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-content-set">
                          <ul className="nav">
                            <li>
                              <a
                                className={`${option === 1 ? "active" : ""}`}
                                onClick={() => setOption(1)}
                              >
                                <span className="set-about-icon me-2">
                                  <img
                                    src="/images/dashborad/icons/menu-icon-02.svg"
                                    alt=""
                                  />
                                </span>
                                Examination
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => setOption(2)}
                                className={`${option === 2 ? "active" : ""}`}
                              >
                                <span className="set-about-icon me-2">
                                  <img
                                    src="/images/dashborad/icons/menu-icon-16.svg"
                                    alt=""
                                  />
                                </span>
                                Medical History
                              </a>
                            </li>
                          </ul>
                        </div>
                        {option === 1 ? (
                          <Examination
                            clinicName={CLINIC_NAME}
                            patient={patientData}
                          />
                        ) : (
                          <MedicalHistory />
                        )}
                      </div>
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

export default PatientProfile;
