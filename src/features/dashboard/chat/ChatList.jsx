import { useState } from "react";
import { useChat } from "../../../context/ChatContext";

function ChatList({ user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const chatCtx = useChat();

  const {
    chats = [],
    loading = false,
    error = null,
    onlineUsers = new Set(),
    setActiveChat,
    activeChat = null,
  } = chatCtx || {};

  // Helper functions
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    var date = new Date(timestamp);

    var hour = date.getHours();
    var time = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hour}:${minutes} ${time}`;
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

  const filteredChats = chats.filter((chat) => {
    const searchTermLower = searchTerm.toLowerCase();
    const chatName = getChatName(chat);
    if (chat.type === "direct") {
      const otherParticipant = getOtherParticipant(chat);
      return (
        chatName.toLowerCase().includes(searchTermLower) ||
        otherParticipant?.email?.toLowerCase().includes(searchTermLower)
      );
    }
    return chatName.toLowerCase().includes(searchTermLower);
  });

  return (
    <div className="col-xl-4 d-flex">
      <div className="card chat-box-clinic">
        <div className="chat-widgets">
          <div className="chat-user-group-head d-flex align-items-center">
            <div className="img-users call-user">
              <a>
                <img src={user.profilePhoto} alt={user.name} />
              </a>
            </div>
            <div className="chat-users user-main">
              <div className="user-titles">
                <h5>{user.name}</h5>
                <div className="chat-user-time">
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="top-liv-search top-chat-search ">
            <form>
              <div className="chat-search">
                <div className="input-block me-2 mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search chats..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <a className="btn" href="javascript:;">
                    <img
                      src="/public/images/dashborad/icons/search-normal.svg"
                      alt="Search"
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
          <ul className="slimscroll scroll" style={{ height: "45vh" }}>
            {loading ? (
              <div className="text-center p-4">Loading chats...</div>
            ) : error ? (
              <div className="text-center p-4 text-danger">{error}</div>
            ) : filteredChats.length === 0 ? (
              <div className="text-center p-4" style={{ height: "45vh" }}>
                <h4>No chats found</h4>
              </div>
            ) : (
              filteredChats.map((chat) => {
                const lastMessage = chat.messages?.[chat.messages?.length - 1];
                const isOnline =
                  chat.participants?.some((p) => onlineUsers?.has(p._id)) ||
                  false;
                const unreadCount =
                  activeChat ||
                  chat.messages?.filter((m) => !m.readBy?.includes(user.id))
                    ?.length ||
                  0;

                return (
                  <li
                    key={chat._id}
                    className={`chat-user-group d-flex align-items-center  ${
                      activeChat?._id === chat._id ? "chat-active" : ""
                    }`}
                    onClick={() => setActiveChat(chat._id)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "-33px",
                    }}
                  >
                    <div className="img-users call-user">
                      <a href="profile.html">
                        <img
                          src={getChatAvatar(chat)}
                          alt={getChatName(chat)}
                        />
                      </a>
                      {isOnline && <span className="active-users bg-success" />}
                    </div>
                    <div className="chat-users">
                      <div className="user-titles d-flex">
                        <h5>{getChatName(chat)}</h5>
                        {lastMessage && (
                          <div className="chat-user-time">
                            <p>{formatTime(lastMessage.createdAt)}</p>
                          </div>
                        )}
                      </div>
                      <div className="user-text d-flex">
                        {lastMessage && (
                          <>
                            <p>{lastMessage.content?.substring(0, 30)}...</p>
                            {unreadCount > 0 && (
                              <div className="chat-user-count">
                                <span>{unreadCount}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
