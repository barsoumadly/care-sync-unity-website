import { IoArrowBackOutline } from "react-icons/io5";
import ClinicHeader from "./ClinicHeader";

function ClinicProfile() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <ClinicHeader
            ClinicHeader
            activeTab="about"
            headerText="Clinic Profile"
          />
          <div className="profile-tabs">
            <div className="tab-content">
              <div className="tab-pane show active" id="about-cont">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box">
                      <h3 className="card-title">Education Informations</h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Medical Science (UG)
                                </a>
                                <div>MBBS</div>
                                <span className="time">2001 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Medical Science (PG)
                                </a>
                                <div>MD - Obstetrics &amp; Gynaecology</div>
                                <span className="time">1997 - 2001</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-box "></div>
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

export default ClinicProfile;
