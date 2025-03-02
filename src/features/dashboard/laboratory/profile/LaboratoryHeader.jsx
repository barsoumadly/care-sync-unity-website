import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ActiveStar from "../../../../ui/ActiveStar";
import InactiveStar from "../../../../ui/InactiveStar";
import SemiactiveStar from "../../../../ui/SemiactiveStar";

const laboratory = {
  id: 1,
  name: "Alfa Laboratory",
  slug: "alfa-laboratory",
  email: "alfa-laboratory@gmail.com",
  city: "Cairo",
  address:
    "El-Sayed El-Merghany, Manshîyet el Bakri, Heliopolis, Cairo Governorate",
  location:
    "Alfa Laboratory El-Sayed El-Merghany, Manshîyet el Bakri, Heliopolis, Cairo Governorate",
  phone: "012 81001504",
  foundedDate: 1975,
  profilePhoto:
    "https://lh3.googleusercontent.com/p/AF1QipNCM2ymcmttFz5-YmrUyMwNQwfN70YkJ0jFsWUZ=s1360-w1360-h1020",
  rating: 3.5,
};

function LaboratoryHeader({ activeTab }) {
  const numOfInactiveStars = 5 - laboratory.rating;
  const activeStars = Array.from(
    { length: laboratory.rating },
    (_, i) => i + 1
  );
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
              {laboratory.name}
              {activeTab === "analysis" ? " Analysis List" : " Profile"}
            </li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <Link to="/laboratory/dashboard" class="btn btn-primary btn-rounded">
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
                      src={laboratory.profilePhoto}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">
                        {laboratory.name}
                      </h3>
                      <small className="text-muted">{laboratory.city}</small>
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
                          to="/laboratory/edit-profile"
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
                          <a>{laboratory.phone}</a>
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
                              {laboratory.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">{laboratory.address}</span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">{laboratory.foundedDate}</span>
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

export default LaboratoryHeader;
