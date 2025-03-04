import { useState } from "react";

function DoctorProfilePhoto({ doctorData, onChangeDoctorData }) {
  const [profilePhoto, setProfilePhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );

  const performSubmit = function (event) {
    const photo = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(photo);
    onChangeDoctorData({ ...doctorData, photo });
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
                onChange={performSubmit}
                className="hide-input"
                data-cf-modified-f4b406440a9d28b1c089eaf4-=""
              />
              <label htmlFor="file" className="upload">
                Choose File
              </label>
            </div>
            <div className="upload-images upload-size">
              <img src={profilePhoto} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default DoctorProfilePhoto;
