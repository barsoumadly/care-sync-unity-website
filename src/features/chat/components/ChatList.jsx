import PropTypes from 'prop-types';
import { useChat } from '../../../context/ChatContext';

function ChatList({ chats, activeChat, onSelectChat }) {
    const { onlineUsers, typingUsers } = useChat();

    const formatLastMessage = (chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];
        if (!lastMessage) return 'No messages yet';

        const hasAttachments = lastMessage.attachments?.length > 0;
        if (hasAttachments) {
            const attachmentTypes = new Set(lastMessage.attachments.map(a => a.type));
            if (attachmentTypes.has('image')) {
                return '📷 Image';
            }
            return '📎 Attachment';
        }

        return lastMessage.content;
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;

        // If less than 24 hours, show time
        if (diff < 24 * 60 * 60 * 1000) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        // If this year, show date without year
        if (date.getFullYear() === now.getFullYear()) {
            return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        }

        // Otherwise show full date
        return date.toLocaleDateString([], { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const getTypingIndicator = (chat) => {
        const typingUsersList = typingUsers.get(chat._id);
        if (!typingUsersList?.size) return null;

        const typingParticipants = Array.from(typingUsersList)
            .map(userId => {
                const participant = chat.participants.find(p => p._id === userId);
                return participant?.name || 'Someone';
            });

        if (typingParticipants.length === 1) {
            return `${typingParticipants[0]} is typing...`;
        }
        if (typingParticipants.length === 2) {
            return `${typingParticipants[0]} and ${typingParticipants[1]} are typing...`;
        }
        return 'Multiple people are typing...';
    };

    const getChatName = (chat) => {
        if (chat.type === 'group') return chat.name;

        const otherParticipant = chat.participants.find(
            p => p._id !== localStorage.getItem('userId')
        );
        return otherParticipant?.name || 'Unknown User';
    };

    return (
        <div className="chat-list">
            <div className="chat-list-header">
                <h2>Chats</h2>
            </div>
            
            <div className="chat-list-content">
                {chats.length === 0 ? (
                    <div className="chat-list-empty">
                        No chats yet
                    </div>
                ) : (
                    chats.map(chat => {
                        const isActive = activeChat?._id === chat._id;
                        const chatName = getChatName(chat);
                        const lastMessage = chat.messages[chat.messages.length - 1];
                        const typingIndicator = getTypingIndicator(chat);
                        
                        return (
                            <div
                                key={chat._id}
                                className={`chat-list-item ${isActive ? 'active' : ''}`}
                                onClick={() => onSelectChat(chat._id)}
                            >
                                <div className="chat-item-avatar">
                                    {chat.type === 'group' ? (
                                        <div className="group-avatar">
                                            👥
                                        </div>
                                    ) : (
                                        <div className={`user-avatar ${
                                            onlineUsers.has(chat.participants[0]._id) ? 'online' : ''
                                        }`}>
                                            👤
                                        </div>
                                    )}
                                </div>

                                <div className="chat-item-content">
                                    <div className="chat-item-header">
                                        <h3 className="chat-item-name">{chatName}</h3>
                                        {lastMessage && (
                                            <span className="chat-item-time">
                                                {formatTimestamp(lastMessage.createdAt)}
                                            </span>
                                        )}
                                    </div>

                                    <div className="chat-item-message">
                                        {typingIndicator ? (
                                            <span className="typing-indicator">
                                                {typingIndicator}
                                            </span>
                                        ) : (
                                            <span className="last-message">
                                                {formatLastMessage(chat)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['direct', 'group']).isRequired,
        name: PropTypes.string,
        participants: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            sender: PropTypes.string.isRequired,
            attachments: PropTypes.arrayOf(PropTypes.shape({
                url: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired
            })),
            createdAt: PropTypes.string.isRequired
        })).isRequired
    })).isRequired,
    activeChat: PropTypes.object,
    onSelectChat: PropTypes.func.isRequired
};

export default ChatList;

// CSS to be added to src/styles/style.css
/*
.chat-list {
    width: 300px;
    border-right: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    background: #fff;
}

.chat-list-header {
    padding: 16px;
    border-bottom: 1px solid #e1e1e1;
}

.chat-list-header h2 {
    margin: 0;
    font-size: 18px;
    color: #333;
}

.chat-list-content {
    flex: 1;
    overflow-y: auto;
}

.chat-list-empty {
    padding: 20px;
    text-align: center;
    color: #666;
}

.chat-list-item {
    display: flex;
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.chat-list-item:hover {
    background-color: #f5f5f5;
}

.chat-list-item.active {
    background-color: #e3f2fd;
}

.chat-item-avatar {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e1e1e1;
}

.user-avatar.online::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background: #4caf50;
    border-radius: 50%;
    border: 2px solid #fff;
}

.chat-item-content {
    flex: 1;
    min-width: 0;
}

.chat-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
}

.chat-item-name {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    color: #333;
}

.chat-item-time {
    font-size: 12px;
    color: #666;
}

.chat-item-message {
    font-size: 13px;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.typing-indicator {
    color: #2196f3;
    font-style: italic;
}
*/