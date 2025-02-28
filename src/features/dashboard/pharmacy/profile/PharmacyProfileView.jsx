import Map from "../../../../ui/Map";
import PharmacyHeader from "./pharmacyHeader";

const pharmacy = {
  id: 1,
  name: "El Ezaby Pharmacy",
  slug: "el-ezaby-pharmacy",
  email: "el-ezaby-pharmacy@gmail.com",
  city: "Cairo",
  address: "206 El Hegaz St, Al Matar, El Nozha, Cairo Governorate",
  location:
    "el-ezaby-pharmacy 206 El Hegaz St, Al Matar, El Nozha, Cairo Governorate",
  phone: "02 35317347",
  foundedDate: 1975,
  profilePhoto:
    "https://cdna1.yellowpages.com.eg/uploads/contract-services/english/2024/13/el-ezaby-pharmacies-photo_99370_2020_wa_01_21627.jpg?3",
  rating: 4,
};

function PharmacyProfileView() {
  // const pharmacy = JSON.parse(localStorage.getItem("pharmacy"));

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          <PharmacyHeader activeTab="about" />
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
                            At {pharmacy.name}, our experienced doctors and
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
                        name={pharmacy.name}
                        markerPosition={pharmacy?.location}
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

export default PharmacyProfileView;
