import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updatePatientProfile } from "../../../../services/patient";
import { updateProfilePhoto } from "../../../../services/user";
import { useAuth } from "../../../../context/AuthContext";

function PatientProfilePhoto({ patientData, onChangePageNumber }) {
  const token = JSON.parse(localStorage.getItem("key"));
  const { user } = useAuth();

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

  const performSubmit = async function (event) {
    event.preventDefault();

    await updatePatientProfile(patientData, token);
    await updateProfilePhoto(profilePhotoObject, token);
    // toast.promise(saveSettings(settings), {
    //   loading: "Saving...",
    //   success: <b>Data saved 👍</b>,
    //   error: <b>Could not save 🥲</b>,
    // });
    navigate("/patient/dashboard");
  };

  return (
    <form>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Upload Your Profile Photo (optional)
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
                onChange={(event) => {
                  setProfilePhoto(URL.createObjectURL(event.target.files[0]));
                  setProfilePhotoObject(event.target.files[0]);
                }}
                className="hide-input"
                data-cf-modified-f4b406440a9d28b1c089eaf4-=""
              />
              <label htmlFor="file" className="upload">
                Choose File
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
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PatientProfilePhoto;
