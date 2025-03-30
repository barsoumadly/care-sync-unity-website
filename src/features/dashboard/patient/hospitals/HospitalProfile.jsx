import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../../ui/LoadingSpinner";
import Map from "../../../../ui/Map";
import HospitalHeader from "./HospitalHeader";
import useClinicProfile from "./useClinicProfile";

function HospitalProfile() {
  const { id } = useParams();
  const { data: clinic, isLoading } = useClinicProfile(id);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <HospitalHeader activeTab="about" clinic={clinic} />
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
                                At {clinic.name}, our experienced doctors and
                                staff are dedicated to providing compassionate,
                                cutting-edge care.
                                <br /> We prioritize your well-being and strive
                                for the best possible outcomes.
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
                                      Clinic Foundation
                                    </a>
                                    <div>team of healthcare professionals</div>
                                    <span className="time">1937 - 1939</span>
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
                            name={clinic?.name}
                            markerPosition={`${clinic?.name} hospital ${clinic?.address?.address} ${clinic?.address?.city}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HospitalProfile;
