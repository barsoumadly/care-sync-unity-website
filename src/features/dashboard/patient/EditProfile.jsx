function EditProfile() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Patient </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Edit Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Patient Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Full Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: Daniel"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: +20123456789"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Diseases
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: Diabetes, High Blood Pressure, etc."
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            City <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: Cairo"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Area <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: Heliopolis"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-top-form">
                          <label className="local-top">
                            Avatar <span className="login-danger">*</span>
                          </label>
                          <div className="settings-btn upload-files-avator">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)"
                              className="hide-input"
                              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                          <div className="upload-images upload-size">
                            <img
                              src="https://preclinic.dreamstechnologies.com/html/template/assets/img/user-06.jpg"
                              alt="Image"
                            />
                            <a
                              href="javascript:void(0);"
                              className="btn-icon logo-hide-btn"
                            >
                              <i className="feather-x-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="submit"
                            className="btn btn-primary submit-form me-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
