import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import ActiveStar from "../../../../ui/ActiveStar";
import InactiveStar from "../../../../ui/InactiveStar";
import SemiactiveStar from "../../../../ui/SemiactiveStar";
import { createChat } from "../../../../services/chat-app";
import useUser from "../../useUser";

function HospitalHeader({ activeTab, clinic }) {
  const { data: clinicUser } = useUser(clinic?.adminId);
  const numOfInactiveStars = 5 - clinic?.rating;
  const activeStars = Array.from({ length: clinic?.rating }, (_, i) => i + 1);
  let inactiveStars;

  if (Number.isInteger(numOfInactiveStars)) {
    inactiveStars = Array.from({ length: numOfInactiveStars }, (_, i) => i + 1);
  } else {
    inactiveStars = Array.from({ length: numOfInactiveStars }, (_, i) => i + 1);
  }

  const handleCreateChat = async function () {
    const response = await createChat(
      "67c6593cd2bc99b92e9e25ef",
      JSON.parse(localStorage.getItem("key"))
    );

    localStorage.setItem("chat", JSON.stringify(response.data.data.chat));
  };

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
              {clinic?.name} Hospital
              {activeTab === "doctor-list"
                ? " Doctors"
                : activeTab === "images"
                ? " Images"
                : " Profile"}
            </li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <Link to="/patient/hospitals" class="btn btn-primary btn-rounded">
            <IoArrowBackOutline /> Back to Hospitals
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
                      src={clinicUser?.profilePhoto?.url}
                      alt={clinic?.name}
                    />
                  </a>
                </div>
              </div>
              <div className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name m-t-0 mb-0">
                        {clinic?.name} Hospital
                      </h3>
                      <small className="text-muted">
                        {clinic?.address?.city}
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
                        <Link
                          to="/patient/chat"
                          className="btn btn-primary"
                          onClick={handleCreateChat}
                        >
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
                          <a>{clinic?.phone}</a>
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
                              {clinicUser?.email}
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">
                          {clinic?.address?.address}, {clinic?.address?.area},{" "}
                          {clinic?.address?.city} Governorate
                        </span>
                      </li>
                      <li>
                        <span className="title">Founded:</span>
                        <span className="text">
                          {clinic?.foundedYear || "__"}
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
              to={`/patient/hospitals/${clinic.slug}/${clinic._id}`}
              data-bs-toggle="tab"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/patient/hospitals/${clinic.slug}/${clinic._id}/doctors`}
              className={`nav-link${
                activeTab === "doctor-list" ? " active" : ""
              }`}
              data-bs-toggle="tab"
            >
              Doctors List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${activeTab === "images" ? " active" : ""}`}
              to={`/patient/hospitals/${clinic.slug}/${clinic._id}/images`}
              data-bs-toggle="tab"
            >
              Images
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HospitalHeader;
