import { IoArrowBackOutline } from "react-icons/io5";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { useChat } from "../../../context/ChatContext";
import { useState, useEffect, useRef } from "react";
import { ImAttachment } from "react-icons/im";
import ChatList from "./ChatList";

function Chat() {
  const { user } = useAuth();
  const chatCtx = useChat();
  const [connectionError, setConnectionError] = useState(false);
  const [chatError, setChatError] = useState(null);
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const {
    chats = [],
    activeChat = null,
    loading = false,
    error = null,
    onlineUsers = new Set(),
    typingUsers = new Map(),
    sendMessage,
    setActiveChat,
    updateTypingStatus,
    uploadAttachment,
  } = chatCtx || {};

  // Check token
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (!token) {
      setConnectionError(true);
    }
  }, []);

  useEffect(() => {
    if (!chatCtx) {
      setChatError(
        "Chat service is unavailable. Please ensure you are logged in."
      );
    }
  }, [chatCtx]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  const formatDateTime = (timestamp) => {
    if (!timestamp) return "";
    const day = new Date(timestamp).toLocaleString().split(",")[0];
    // console.log(day.split(","));

    var date = new Date(timestamp);

    var hour = date.getHours();
    var time = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return { day, time: `${hour}:${minutes} ${time}` };
  };

  const getOtherParticipant = (chat) => {
    return chat.type === "direct"
      ? chat.participants.find((p) => p._id !== user.id)
      : null;
  };

  const getChatName = (chat) => {
    if (chat.type === "direct") {
      const otherParticipant = getOtherParticipant(chat);
      return otherParticipant?.name || "Unknown User";
    }
    return chat.name;
  };

  const getChatAvatar = (chat) => {
    if (chat.type === "direct") {
      const otherParticipant = getOtherParticipant(chat);
      return otherParticipant?.profilePhoto?.url || "/images/clinic/clinic.jpg";
    }
    return chat.avatar || "/images/clinic/clinic.jpg";
  };

  const getErrorMessage = () => {
    if (connectionError) {
      return "Unable to connect to chat service. Please try logging in again.";
    }
    if (chatError) {
      return chatError;
    }
    if (error) {
      return error;
    }
    return null;
  };

  // Event handlers
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (activeChat) {
      updateTypingStatus(activeChat._id, true);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !activeChat) return;

    sendMessage(activeChat._id, message);
    setMessage("");
    updateTypingStatus(activeChat._id, false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file && activeChat) {
      try {
        const attachment = await uploadAttachment(activeChat._id, file);
        sendMessage(activeChat._id, `Sent a file: ${file.name}`, [attachment]);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const activeTypingUsers = activeChat
    ? Array.from(typingUsers.get(activeChat._id) || [])
    : [];

  const errorMessage = getErrorMessage();
  if (errorMessage) {
    return (
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="card">
              <div className="card-body">
                <div className="text-center text-danger">{errorMessage}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                    <a>Dashboard </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Chat</li>
                </ul>
              </div>
              <div className="col-sm-5 col-6 text-end">
                <Link
                  to="/patient/dashboard"
                  className="btn btn-primary btn-rounded"
                >
                  <IoArrowBackOutline /> Return Back
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <ChatList user={user} />

            <div className="col-xl-8">
              {activeChat ? (
                <>
                  <div className="card chat-box">
                    <div className="chat-search-group">
                      <div className="chat-user-group mb-0 d-flex align-items-center">
                        <div className="img-users call-user">
                          <a href="profile.html">
                            <img
                              src={getChatAvatar(activeChat)}
                              alt={getChatName(activeChat)}
                            />
                          </a>
                          {activeChat.participants?.some((p) =>
                            onlineUsers?.has(p._id)
                          ) && <span className="active-users bg-success" />}
                        </div>
                        <div className="chat-users">
                          <div className="user-titles">
                            <h5>{getChatName(activeChat)}</h5>
                          </div>
                          {activeTypingUsers.length > 0 && (
                            <div className="user-text">
                              <p>
                                {activeTypingUsers.length > 1
                                  ? "Multiple people are typing..."
                                  : `${activeTypingUsers[0]} is typing...`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card chat-message-box">
                    <div className="card-body p-0">
                      <div className="chat-body">
                        <ul
                          className="list-unstyled chat-message slimscroll scroll"
                          style={{ height: "36vh" }}
                        >
                          {activeChat.messages?.map((msg) => (
                            <li
                              key={msg._id}
                              className={`media d-flex ${
                                msg.sender === user.id ? "sent" : "received"
                              }`}
                            >
                              {/* {msg.sender !== user.id && (
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src={
                                      msg.sender?.profilePhoto?.url ||
                                      "/images/clinic/clinic.jpg"
                                    }
                                    alt={msg.sender?.name || "User"}
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                              )} */}
                              <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                  <div className="message-sub-box">
                                    {/* {msg.sender?._id !== user._id && (
                                      <h4>{msg.sender?.name}</h4>
                                    )} */}
                                    <p style={{ width: "fit-content" }}>
                                      {msg.content}
                                    </p>
                                    <span>
                                      {formatDateTime(msg.createdAt).time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                          <div ref={messagesEndRef} />
                        </ul>
                      </div>
                      <div className="chat-footer-box">
                        <div className="discussion-sent">
                          <div className="row gx-2">
                            <div className="col-lg-12">
                              <div className="footer-discussion">
                                <div className="inputgroups">
                                  <input
                                    type="text"
                                    placeholder="Type your Message here..."
                                    value={message}
                                    onChange={handleMessageChange}
                                    onKeyPress={(e) => {
                                      if (e.key === "Enter") {
                                        handleSendMessage(e);
                                      }
                                    }}
                                  />
                                  <div className="micro-text position-icon">
                                    <img
                                      src="/images/dashborad/icons/chat-foot-icon-04.svg"
                                      alt="Microphone"
                                    />
                                  </div>
                                  <div
                                    className="send-chat position-icon comman-flex"
                                    onClick={handleSendMessage}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <a href="javascript:;">
                                      <img
                                        src="/images/dashborad/icons/chat-foot-icon-03.svg"
                                        alt="Send"
                                      />
                                    </a>
                                  </div>
                                  <div className="symple-text position-icon">
                                    <ul>
                                      <li>
                                        <a
                                          href="javascript:;"
                                          onClick={() =>
                                            fileInputRef.current?.click()
                                          }
                                        >
                                          <ImAttachment />
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:;"></a>
                                      </li>
                                    </ul>
                                  </div>
                                  <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    accept="image/*,.pdf,.doc,.docx"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="card chat-box">
                  <div
                    className="text-center mt-5 py-5"
                    style={{ padding: "0 10%" }}
                  >
                    <div className="reminder-icon">
                      <img
                        src="/images/dashborad/chat-photo.png"
                        alt={""}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <h4>Select a chat to start messaging</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
