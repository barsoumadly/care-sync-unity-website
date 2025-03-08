function EditProfileDoc () {
  return (
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
                        <label >
                          First Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="pet"
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
                          placeholder="john"
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
                          placeholder="pet_john15"
                        />
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                          Mobile <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div> */}
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                          Email <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="example@email.com"
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
                          placeholder="****************"
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
                          placeholder="****************"
                        />
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms cal-icon">
                        <label>
                          Date Of Birth <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder=""
                        />
                      </div>
                    </div> */}
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
                              className="form-check-input mt-0"
                              defaultChecked={true}
                            />
                            Male
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input mt-0"
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  {/*   <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          Education <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
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
                          placeholder=""
                        />
                      </div>
                    </div>*/}
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
                   {/*  <div className="col-12 col-sm-12">
                      <div className="input-block local-forms">
                        <label>
                          Address <span className="login-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          cols={30}
                          defaultValue={""}
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
                          <option>Los Angeles</option>
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
                          State/Province <span className="login-danger">*</span>
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
                          placeholder=""
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
                          defaultValue={""}
                        />
                      </div>
                    </div>*/}
                   {/*  <div className="col-12 col-md-6 col-xl-6">
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
                            onChange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)"
                            className="hide-input"
                            data-cf-modified-fba49bb595ba7c266923593f-=""
                          />
                          <label htmlFor="file" className="upload">
                            Choose File
                          </label>
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
                              name="gender"
                              className="form-check-input mt-0"
                            />
                            Active
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gender"
                              className="form-check-input mt-0"
                            />
                            In Active
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <div className="doctor-submit text-end">
                        <button
                          type="submit"
                          className="btn btn-primary submit-form me-2">
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary cancel-form">
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
      <div className="notification-box">
        <div className="msg-sidebar notifications msg-noti">
          <div className="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div className="drop-scroll msg-list-scroll" id="msg_list">
            <ul className="list-box">
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item new-message">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">1 Aug</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {" "}
                        Catherine Manseau{" "}
                      </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">D</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Domenic Houston </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">B</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Buster Wigton </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Rolland Webber </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Claire Mapes </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Melita Faucher</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Jeffery Lalor</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">L</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Loren Gatlin</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Tarah Shropshire</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix" />
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="chat.html">See all messages</a>
          </div>
        </div>
      </div>
    </div>
  );
}




export default EditProfileDoc