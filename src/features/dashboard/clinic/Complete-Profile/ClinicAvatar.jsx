function ClinicAvatar({ avatar, handleAvatar }) {
  if (typeof avatar !== "string" && avatar) {
    avatar = URL.createObjectURL(avatar);
  }
  return (
    <>
      <div className="col-12">
        <div className="form-heading">
          <h4>
            Profile Photo <span style={{ fontSize: "12px" }}>(Optional)</span>
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
              name="profilePhoto"
              id="profilePhoto"
              onChange={(event) => {
                handleAvatar(event.target.files[0]);
              }}
              className="hide-input"
              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
            />
            <label htmlFor="profilePhoto" className="upload">
              Choose File
            </label>
          </div>
          <div className="upload-images upload-size">
            {<img src={avatar} alt="Image" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicAvatar;
