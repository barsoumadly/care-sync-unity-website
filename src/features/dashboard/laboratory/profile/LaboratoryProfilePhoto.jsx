import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEditProfile from "./useEditProfile";
import { useAuth } from "../../../../context/AuthContext";

function LaboratoryProfilePhoto({ laboratoryData, onChangePageNumber }) {
  const { user } = useAuth();
  const {
    UpdateLaboratory,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  } = useEditProfile();

  const [profilePhotoObject, setProfilePhotoObject] = useState({});
  const [profilePhoto, setProfilePhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );

  const displayedPhoto = profilePhoto.includes("blob")
    ? profilePhoto
    : user.profilePhoto
    ? user.profilePhoto
    : profilePhoto;

  const navigate = useNavigate();

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  const performSubmit = function (event) {
    event.preventDefault();

    UpdateLaboratory({ laboratoryData });
    UpdateProfilePhoto({ profilePhoto: profilePhotoObject });

    navigate("/laboratory/dashboard");
  };

  return (
    <form onSubmit={performSubmit}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Upload Your Profile Photo
              </span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-5">
          <div className="input-block local-top-form">
            <label className="local-top">
              Avatar <span className="login-danger"></span>
            </label>
            <div className="settings-btn upload-files-avator">
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                disabled={isPhotoLoading}
                onChange={(event) => {
                  setProfilePhoto(URL.createObjectURL(event.target.files[0]));
                  setProfilePhotoObject(event.target.files[0]);
                }}
                className="hide-input"
                data-cf-modified-f4b406440a9d28b1c089eaf4-=""
              />
              <label htmlFor="file" className="upload">
                Choose Photo
              </label>
            </div>
            <div className="upload-images upload-size">
              <img src={displayedPhoto} alt="Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-xl-1">
          <div className="doctor-submit text-end">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
              onClick={handleDecPageNumber}
            >
              Back
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-11">
          <div className="doctor-submit text-end">
            <button
              className="btn btn-primary submit-form me-2"
              onClick={performSubmit}
              disabled={isDataLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LaboratoryProfilePhoto;
