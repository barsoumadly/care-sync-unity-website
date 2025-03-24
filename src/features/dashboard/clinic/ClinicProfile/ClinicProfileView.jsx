import Map from "../../../../ui/Map";
import ClinicHeader from "./ClinicHeader";
import useClinicProfile from "../useClinicProfile";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function ClinicProfileView() {
  const { data, isLoading } = useClinicProfile();
  console.log(data);
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <ClinicHeader clinic={data} isLoading={isLoading} />
          <div className="profile-tabs">
            <div className="tab-content">
              <div className="tab-pane show active" id="about-cont">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box">
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <>
                          <h3 className="card-title"> Informations</h3>
                          <div className="experience-box">
                            <div className="hello-park">
                              <p>
                                At {data?.name}, our experienced doctors and
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
                                    <a className="name">Clinic Foundation</a>
                                    <div>team of healthcare professionals</div>
                                    <span className="time">
                                      {data?.founded?.split("T")[0]}
                                    </span>
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
                          </div>{" "}
                        </>
                      )}
                    </div>
                    <div className="card-box">
                      <Map
                        name="pharmacy?.name"
                        isLoading={isLoading}
                        markerPosition={`${data?.name} ${data?.address.street} ${data?.address.city}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default ClinicProfileView;
