import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ActiveStar from "../../../../ui/ActiveStar";
import InactiveStar from "../../../../ui/InactiveStar";
import SemiactiveStar from "../../../../ui/SemiactiveStar";
import useUser from "../../useUser";

function PharmacyHeader({ activeTab }) {
  const pharmacy = JSON.parse(localStorage.getItem("pharmacy"));
  const { data: pharmacyUser } = useUser(pharmacy.userId);

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
          <Link to="/patient/pharmacies" class="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> Back to Pharmacies
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
                      src={pharmacyUser?.profilePhoto?.url}
                      alt={pharmacy?.name}
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">
                        {pharmacy?.name} Pharmacy
                      </h3>
                      <small className="text-muted">
                        {pharmacy?.address.city}
                      </small>
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
                        <Link to="/patient/chat" className="btn btn-primary">
                          Send Message
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <span className="title">Phone:</span>
                        <span className="text">
                          <a>{pharmacy?.phone}</a>
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
                              {pharmacyUser?.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">
                          {pharmacy?.address.address}
                        </span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">
                          {pharmacy?.foundedYear || "__"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
          <li className="nav-item">
            <Link
              className={`nav-link${activeTab === "about" ? " active" : ""}`}
              to={`/patient/pharmacies/${pharmacy?.slug}`}
              data-bs-toggle="tab"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${
                activeTab === "medicines" ? " active" : ""
              }`}
              to={`/patient/pharmacies/${pharmacy?.slug}/medicines`}
              data-bs-toggle="tab"
            >
              Medicines
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PharmacyHeader;
