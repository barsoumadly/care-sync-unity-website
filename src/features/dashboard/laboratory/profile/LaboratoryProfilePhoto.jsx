import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LaboratoryProfilePhoto({
  laboratoryData,
  onChangeLaboratoryData,
  onChangePageNumber,
}) {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const navigate = useNavigate();

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  const performSubmit = function (event) {
    event.preventDefault();

    onChangeLaboratoryData({ ...laboratoryData, profilePhoto });
    // toast.promise(saveSettings(settings), {
    //   loading: "Saving...",
    //   success: <b>Data saved 👍</b>,
    //   error: <b>Could not save 🥲</b>,
    // });
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
                onChange={(event) => {
                  setProfilePhoto(URL.createObjectURL(event.target.files[0]));
                }}
                className="hide-input"
                data-cf-modified-f4b406440a9d28b1c089eaf4-=""
              />
              <label htmlFor="file" className="upload">
                Choose Photo
              </label>
            </div>
            <div className="upload-images upload-size">
              <img src={profilePhoto} alt="Image" />
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

export default LaboratoryProfilePhoto;
