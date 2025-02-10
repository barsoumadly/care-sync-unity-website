function EditAppointments() {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="appointments.html">Appointment </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Edit Appointment</li>
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
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          First Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Stephen"
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
                          defaultValue="Bruklin"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
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
                          defaultValue="stephen@gmail.com"
                        />
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
                    <div className="col-12">
                      <div className="form-heading">
                        <h4>Appointment Details</h4>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms cal-icon">
                        <label>
                          Date of Appointment{" "}
                          <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          defaultValue="26-11-22"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          From <span className="login-danger">*</span>
                        </label>
                        <div className="time-icon">
                          <input
                            type="text"
                            className="form-control"
                            id="datetimepicker3"
                            defaultValue="07:00 PM"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="input-block local-forms">
                        <label>
                          To <span className="login-danger">*</span>
                        </label>
                        <div className="time-icon">
                          <input
                            type="text"
                            className="form-control"
                            id="datetimepicker4"
                            defaultValue="08:00 PM"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>Consulting Doctor</label>
                        <select className="form-control select">
                          <option>Select Doctor</option>
                          <option>Dr.Bernardo James</option>
                          <option>Dr.Andrea Lalema</option>
                          <option>Dr.William Stephin</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>Treatment </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Blood Pressure"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12">
                      <div className="input-block local-forms">
                        <label>
                          Notes <span className="login-danger">*</span>
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
                            onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)"
                            className="hide-input"
                            data-cf-modified-edc4ab59e52b93fcd123ebbe-=""
                          />
                          <label htmlFor="file" className="upload">
                            Choose File
                          </label>
                        </div>
                        <div className="upload-images upload-size">
                          <img src="../images/appointments/favicon.png" alt="Image" />
                          <a
                            href="javascript:void(0);"
                            className="btn-icon logo-hide-btn">
                            <i className="feather-x-circle" />
                          </a>
                        </div>
                      </div>
                    </div>
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

export default EditAppointments;
