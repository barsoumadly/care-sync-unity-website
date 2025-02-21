import Map from "../../../../ui/Map";
import LaboratoryHeader from "./LaboratoryHeader";

function LaboratoryProfile() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <LaboratoryHeader
            ClinicHeader
            activeTab="about"
            headerText="Pharmacy Profile"
          />
          <div className="profile-tabs">
            <div className="tab-content">
              <div className="tab-pane show active" id="about-cont">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box">
                      <h3 className="card-title"> Informations</h3>
                      <div className="experience-box">
                        <div className="hello-park">
                          <p>
                            At El Ezaby Pharmacy, our experienced doctors and
                            staff are dedicated to providing compassionate,
                            cutting-edge care.
                            <br /> We prioritize your well-being and strive for
                            the best possible outcomes.
                          </p>
                        </div>
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Pharmacy Foundation
                                </a>
                                <div>team of healthcare professionals</div>
                                <span className="time">1974 - 1975</span>
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
                                  Recent Developments
                                </a>
                                <div>
                                  It began to attract medical tourists from
                                  other countries.
                                </div>
                                <span className="time">1990 - 2000</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-box">
                      <Map
                        name="El Ezaby Pharmacy"
                        markerPosition="el ezaby pharmacy heliopolis"
                      />
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

export default LaboratoryProfile;
