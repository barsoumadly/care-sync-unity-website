import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ActiveStar from "../../../../ui/ActiveStar";
import InactiveStar from "../../../../ui/InactiveStar";
import SemiactiveStar from "../../../../ui/SemiactiveStar";

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

function PharmacyHeader({ activeTab }) {
  // const pharmacy = JSON.parse(localStorage.getItem("pharmacy"));

  const numOfInactiveStars = 5 - pharmacy.rating;
  const activeStars = Array.from({ length: pharmacy.rating }, (_, i) => i + 1);
  let inactiveStars;

  if (Number.isInteger(numOfInactiveStars)) {
    inactiveStars = Array.from({ length: numOfInactiveStars }, (_, i) => i + 1);
  } else {
    inactiveStars = Array.from({ length: numOfInactiveStars }, (_, i) => i + 1);
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Profile </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">
              {pharmacy.name}
              {activeTab === "medicines" ? " Medicines" : " Profile"}
            </li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <Link to="/pharmacy/dashboard" class="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> Return Back
          </Link>
        </div>
      </div>
      <div className="card-box profile-header">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <a href="#">
                    <img
                      className="avatar"
                      src={pharmacy.profilePhoto}
                      alt={pharmacy.name}
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">{pharmacy.name}</h3>
                      <small className="text-muted">{pharmacy.city}</small>
                      <div className="staff-id">
                        <span className="rating rating-score">
                          {activeStars.map((star) => (
                            <ActiveStar key={star} />
                          ))}
                          {Number.isInteger(numOfInactiveStars) ? (
                            inactiveStars.map((star) => (
                              <InactiveStar key={star} />
                            ))
                          ) : (
                            <>
                              <SemiactiveStar />
                              {inactiveStars.map((star) => (
                                <InactiveStar key={star} />
                              ))}
                            </>
                          )}
                        </span>
                      </div>
                      <div className="staff-msg">
                        <Link
                          to="/pharmacy/edit-profile"
                          className="btn btn-primary"
                        >
                          Edit Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <span className="title">Phone:</span>
                        <span className="text">
                          <a>{pharmacy.phone}</a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Email:</span>
                        <span className="text">
                          <a>
                            <span
                              className="__cf_email__"
                              data-cfemail="c2a1b0abb1b6abaca3a5b0adb4a7b182a7baa3afb2aea7eca1adaf"
                            >
                              {pharmacy.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">{pharmacy.address}</span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">{pharmacy.foundedDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PharmacyHeader;
