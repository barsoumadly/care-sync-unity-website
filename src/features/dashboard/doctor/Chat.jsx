function Chat() {
  return <div className="page-wrapper">
  <div className="content">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="chat.html">App </a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right" />
            </li>
            <li className="breadcrumb-item active">Chat</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-xl-4 d-flex">
        <div className="card chat-box-clinic ">
          <div className="chat-widgets">
            <div className="chat-user-group-head d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-01.jpg" alt="img" />
                </a>
                <span className="active-users" />
              </div>
              <div className="chat-users user-main">
                <div className="user-titles">
                  <h5> William Stephin </h5>
                  <div className="chat-user-time">
                    <p>Doctor</p>
                  </div>
                </div>
                <div className="drop-item chat-menu user-dot-list">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=""
                  >
                    <i className="feather-more-vertical" />
                  </a>
                  <div className="dropdown-menu" style={{}}>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="feather-user me-2 text-primary" /> Profile
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="feather-plus-circle me-2 text-success" />{" "}
                      Archive
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="feather-trash-2 me-2 text-danger" /> Delete
                    </a>
                    <a className="dropdown-item " href="javascript:;">
                      <i className="feather-slash me-2 text-secondary" /> Block
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-liv-search top-chat-search">
              <form>
                <div className="chat-search">
                  <div className="input-block me-2 mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <a className="btn">
                      <img src="../images/dashborad/icons/search-normal.svg" alt="" />
                    </a>
                  </div>
                  <div className="add-search">
                    <a href="javascript:;">
                      <i className="feather-plus" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-05.jpg" alt="img" />
                </a>
                <span className="active-users bg-info" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> William Stephin </h5>
                  <div className="chat-user-time">
                    <p>10:22 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="chat-user-count">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-02.jpg" alt="img" />
                </a>
                <span className="active-users" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Mark Hay Smith </h5>
                  <div className="chat-user-time">
                    <p>2hrs ago</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-03.jpg" alt="img" />
                </a>
                <span className="active-users" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> William Stephin </h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="chat-user-count">
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-04.jpg" alt="img" />
                </a>
                <span className="active-users bg-info" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Bernardo James </h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-05.jpg" alt="img" />
                </a>
                <span className="active-users" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Harald Kowalski </h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="chat-user-count">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-03.jpg" alt="img" />
                </a>
                <span className="active-users bg-info" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Alexandr Donnelly </h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="chat-user-count">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-user-group d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-01.jpg" alt="img" />
                </a>
                <span className="active-users" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Regina Dickerson </h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
            <div className="chat-user-group mb-0 d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-02.jpg" alt="img" />
                </a>
                <span className="active-users bg-info" />
              </div>
              <div className="chat-users">
                <div className="user-titles d-flex">
                  <h5> Forest Kroch</h5>
                  <div className="chat-user-time">
                    <p>11:35 AM</p>
                  </div>
                </div>
                <div className="user-text d-flex">
                  <p>Lorem ipsum dolor sit amet...</p>
                  <div className="chat-user-count">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        <div className="card chat-box ">
          <div className=" chat-search-group ">
            <div className="chat-user-group mb-0 d-flex align-items-center">
              <div className="img-users call-user">
                <a href="profile.html">
                  <img src="../images/dashborad/profiles/avatar-05.jpg" alt="img" />
                </a>
                <span className="active-users bg-info" />
              </div>
              <div className="chat-users">
                <div className="user-titles">
                  <h5> Forest Kroch</h5>
                </div>
                <div className="user-text">
                  <p>Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
            <div className="chat-search-list">
              <ul>
                <li>
                  <a href="video-call.html">
                    <img src="../images/dashborad/icons/chat-icon-01.svg" alt="img" />
                  </a>
                </li>
                <li>
                  <a href="voice-call.html">
                    <img src="../images/dashborad/icons/chat-icon-02.svg" alt="img" />
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../images/dashborad/icons/chat-icon-03.svg" alt="img" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Chat */}
        <div className="card chat-message-box">
          <div className="card-body p-0">
            <div className="chat-body">
              <ul className="list-unstyled chat-message">
                <li className="media d-flex received">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../images/dashborad/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="media-body flex-grow-1">
                    <div className="msg-box">
                      <div className="message-sub-box">
                        <h4>Williams Bruk</h4>
                        <p>
                          How likely are you to recommend our company to your
                          friends and family ?
                        </p>
                        <span>06:00 PM, 30 Sep 2022</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media d-flex sent">
                  <div className="media-body flex-grow-1">
                    <div className="msg-box">
                      <div className="message-sub-box">
                        <p>
                          How likely are you to recommend our company to your
                          friends and family ?
                        </p>
                        <span>06:00 PM, 30 Sep 2022</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media d-flex received">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../images/dashborad/profiles/avatar-03.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="media-body flex-grow-1">
                    <div className="msg-box">
                      <div className="message-sub-box">
                        <h4>Galaviz Lalema</h4>
                        <p>non tellus dignissim </p>
                        <ul className="msg-sub-list">
                          <li>
                            <img
                              src="../images/dashborad/icons/chat-icon-04.svg"
                              alt=""
                              className="me-1"
                            />
                            Explainer Video.avi
                            <span className="ms-1">30.0 MB</span>
                            <img
                              src="../images/dashborad/icons/chat-icon-07.svg"
                              alt=""
                              className="ms-1 ms-auto"
                            />
                          </li>
                          <li>
                            <img
                              src="../images/dashborad/icons/chat-icon-05.svg"
                              alt=""
                              className="me-1"
                            />
                            Ayush Therapy.mp3
                            <span className="ms-1">4.0 MB</span>
                            <img
                              src="../images/dashborad/icons/chat-icon-08.svg"
                              alt=""
                              className="ms-1 ms-auto"
                            />
                          </li>
                          <li>
                            <img
                              src="../images/dashborad/icons/chat-icon-06.svg"
                              alt=""
                              className="me-1"
                            />
                            The liver.img<span className="ms-1">520KB</span>
                          </li>
                        </ul>
                        <span>06:32 PM Yesterday</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media d-flex sent">
                  <div className="media-body flex-grow-1">
                    <div className="msg-box">
                      <div className="message-sub-box">
                        <p>
                          Vivamus sed dictum dictum ligula, cursus blandit risus
                        </p>
                        <p className="mb-0">Vivamus sed dictum</p>
                        <span>06:50PM Today</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media d-flex received">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../images/dashborad/profiles/avatar-01.jpg"
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="media-body flex-grow-1">
                    <div className="msg-box">
                      <div className="message-sub-box">
                        <h4>William Stephin</h4>
                        <p>aliquam ut a ex</p>
                        <span>5min Ago</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chat-footer-box">
              <div className="discussion-sent">
                <div className="row gx-2">
                  <div className="col-lg-12 ">
                    <div className="footer-discussion">
                      <div className="inputgroups">
                        <input
                          type="text"
                          placeholder="Type your Message here..."
                        />
                        <div className="micro-text position-icon">
                          <img
                            src="../images/dashborad/icons/chat-foot-icon-04.svg"
                            alt=""
                          />
                        </div>
                        <div className="send-chat position-icon comman-flex">
                          <a href="javascript:;">
                            <img
                              src="../images/dashborad/icons/chat-foot-icon-03.svg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="symple-text position-icon">
                          <ul>
                            <li>
                              <a href="javascript:;">
                                <img
                                  src="../images/dashborad/icons/chat-foot-icon-01.svg"
                                  className="me-2"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <img
                                  src="../images/dashborad/icons/chat-foot-icon-02.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Chat */}
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
                  <span className="message-author"> Catherine Manseau </span>
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
;
}

export default Chat;
