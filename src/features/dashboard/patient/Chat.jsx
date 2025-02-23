import { IoArrowBackOutline, IoVideocam } from "react-icons/io5";
import { useAuth } from "../../../context/AuthContext";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Chat() {
  const { user } = useAuth();
  let { name, role, profilePhoto: avatar } = user;

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
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
              <div class="col-sm-5 col-6 text-end">
                <Link
                  to="/patient/dashboard"
                  class="btn btn-primary btn-rounded"
                >
                  <IoArrowBackOutline /> Return Back
                </Link>
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
                        <img src={avatar} alt="img" />
                      </a>
                      <span className="active-users" />
                    </div>
                    <div className="chat-users user-main">
                      <div className="user-titles">
                        <h5> {name} </h5>
                        <div className="chat-user-time">
                          <p>{role}</p>
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
                            <img
                              src="assets/img/icons/search-normal.svg"
                              alt=""
                            />
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
                        <img src="/images/clinic/clinic.jpg" alt="img" />
                      </a>
                      <span className="active-users bg-info" />
                    </div>
                    <div className="chat-users">
                      <div className="user-titles d-flex">
                        <h5> Heliopolis Hospital </h5>
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
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card chat-box ">
                <div className=" chat-search-group ">
                  <div className="chat-user-group mb-0 d-flex align-items-center">
                    <div className="img-users call-user">
                      <a href="profile.html">
                        <img src="/images/clinic/clinic.jpg" alt="img" />
                      </a>
                      <span className="active-users bg-info" />
                    </div>
                    <div className="chat-users">
                      <div className="user-titles">
                        <h5> Heliopolis Hospital</h5>
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
                          <img src="/images/chat/chat-icon-01.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="voice-call.html">
                          <img src="/images/chat/chat-icon-02.svg" alt="" />
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
                            src="/images/clinic/clinic.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
                          <div className="msg-box">
                            <div className="message-sub-box">
                              <h4>Heliopolis Hospital</h4>
                              <p>
                                How likely are you to recommend our company to
                                your friends and family ?
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
                                How likely are you to recommend our company to
                                your friends and family ?
                              </p>
                              <span>06:00 PM, 30 Sep 2022</span>
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
                                  src="assets/img/icons/chat-foot-icon-04.svg"
                                  alt=""
                                />
                              </div>
                              <div className="send-chat position-icon comman-flex">
                                <a href="javascript:;">
                                  <img
                                    src="/images/chat/chat-foot-icon-03.svg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="symple-text position-icon">
                                <ul>
                                  <li>
                                    <a href="javascript:;">
                                      <img
                                        src="assets/img/icons/chat-foot-icon-01.svg"
                                        className="me-2"
                                        alt=""
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;"></a>
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
      </div>
    </div>
  );
}

export default Chat;
