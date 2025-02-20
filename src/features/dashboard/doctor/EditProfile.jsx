function EditProfile() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="doctors.html">Doctors </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Edit Doctor</li>
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
                          <h4>Doctor Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Daniel"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Bruk"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            User Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Daniel Bruk"
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
                            defaultValue="+1 23 456890"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            defaultValue="example@email.com"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Password <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            defaultValue="password"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Confirm Password{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            defaultValue="password"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms cal-icon">
                          <label>
                            Date Of Birth{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            defaultValue="24-11-2022"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block select-gender">
                          <label className="gen-label">
                            Gender<span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                className="form-check-input"
                                defaultChecked=""
                              />
                              Male
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                className="form-check-input"
                              />
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Education <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="M.B.B.S, M.S."
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Designation <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Physician"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Department <span className="login-danger">*</span>
                          </label>
                          <select className="form-control select">
                            <option>Select Department</option>
                            <option>Orthopedics</option>
                            <option>Radiology</option>
                            <option>Dentist</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="input-block local-forms">
                          <label>
                            Address <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            cols={30}
                            defaultValue={
                              "101, Elanxa Apartments, 340 N Madison Avenue"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            City <span className="login-danger">*</span>
                          </label>
                          <select className="form-control select">
                            <option>Select City</option>
                            <option>Alaska</option>
                            <option>California</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Country <span className="login-danger">*</span>
                          </label>
                          <select className="form-control select">
                            <option>Select Country </option>
                            <option>Usa</option>
                            <option>Uk</option>
                            <option>Italy</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            State/Province{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <select className="form-control select">
                            <option>Select State</option>
                            <option>Alaska</option>
                            <option>California</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Postal Code <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={91403}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="input-block local-forms">
                          <label>
                            Start Biography{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            cols={30}
                            defaultValue={
                              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quriesstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            }
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
                              className="hide-input"
                              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                          <div className="upload-images upload-size">
                            <img
                              src="/images/dashborad/favicon.png"
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
                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block select-gender">
                          <label className="gen-label">
                            Status <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender1"
                                className="form-check-input"
                                defaultChecked=""
                              />
                              Active
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender1"
                                className="form-check-input"
                              />
                              In Active
                            </label>
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
                          <button
                            type="submit"
                            className="btn btn-primary cancel-form"
                          >
                            Cancel
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
    </div>
  );
}

export default EditProfile;
