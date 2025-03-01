function DoctorAvatar({
  avatar = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  handleAvatar,
}) {
  return (
    <>
      <div className="col-12">
        <div className="form-heading">
          <h4>Profile Photo (Optional)</h4>
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
                handleAvatar(URL.createObjectURL(event.target.files[0]));
              }}
              className="hide-input"
              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
            />
            <label htmlFor="file" className="upload">
              Choose File
            </label>
          </div>
          <div className="upload-images upload-size">
            <img src={avatar} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorAvatar;
