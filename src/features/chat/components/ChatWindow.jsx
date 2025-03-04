import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useChat } from '../../../context/ChatContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatWindow({ chat }) {
    const { 
        onlineUsers,
        typingUsers,
        sendMessage,
        updateTypingStatus,
        markMessageAsRead,
        uploadAttachment 
    } = useChat();

    const [isAtBottom, setIsAtBottom] = useState(true);
    const [showScrollBottom, setShowScrollBottom] = useState(false);
    const chatEndRef = useRef(null);

    // Auto-scroll to bottom on new messages if already at bottom
    useEffect(() => {
        if (isAtBottom) {
            scrollToBottom();
        } else {
            setShowScrollBottom(true);
        }
    }, [chat.messages, isAtBottom]);

    // Mark messages as read when they become visible
    useEffect(() => {
        const unreadMessages = chat.messages.filter(
            msg => !msg.readBy.includes(localStorage.getItem('userId'))
        );

        unreadMessages.forEach(msg => {
            markMessageAsRead(chat._id, msg._id);
        });
    }, [chat.messages, chat._id, markMessageAsRead]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const atBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 50;
        setIsAtBottom(atBottom);
        setShowScrollBottom(!atBottom);
    };

    const handleSendMessage = (content) => {
        sendMessage(chat._id, content);
    };

    const handleTypingStatus = (isTyping) => {
        updateTypingStatus(chat._id, isTyping);
    };

    const handleFileUpload = async (file) => {
        try {
            const attachment = await uploadAttachment(chat._id, file);
            sendMessage(chat._id, '', [attachment]);
        } catch (err) {
            console.error('Failed to upload file:', err);
            // You might want to show an error notification here
        }
    };

    const getChatName = () => {
        if (chat.type === 'group') return chat.name;

        const otherParticipant = chat.participants.find(
            p => p._id !== localStorage.getItem('userId')
        );
        return otherParticipant?.name || 'Unknown User';
    };

    const getStatusText = () => {
        if (chat.type === 'group') {
            const onlineCount = chat.participants.filter(
                p => onlineUsers.has(p._id)
            ).length;
            return onlineCount > 0 ? `${onlineCount} online` : '';
        }

        const otherParticipant = chat.participants.find(
            p => p._id !== localStorage.getItem('userId')
        );
        if (!otherParticipant) return '';

        return onlineUsers.has(otherParticipant._id) ? 'online' : '';
    };

    const getTypingText = () => {
        const typingUsersList = typingUsers.get(chat._id);
        if (!typingUsersList?.size) return '';

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

    return (
        <div className="chat-window">
            <div className="chat-window-header">
                <h2>{getChatName()}</h2>
                <div className="chat-window-status">
                    {getStatusText()}
                </div>
            </div>

            <div className="chat-window-messages" onScroll={handleScroll}>
                <MessageList 
                    messages={chat.messages}
                    participants={chat.participants}
                />
                <div ref={chatEndRef} />
            </div>

            {showScrollBottom && (
                <button 
                    className="scroll-to-bottom"
                    onClick={scrollToBottom}
                >
                    ↓
                </button>
            )}

            <div className="chat-window-footer">
                {getTypingText() && (
                    <div className="typing-indicator">
                        {getTypingText()}
                    </div>
                )}
                <MessageInput
                    onSendMessage={handleSendMessage}
                    onTypingStatus={handleTypingStatus}
                    onFileUpload={handleFileUpload}
                />
            </div>
        </div>
    );
}

ChatWindow.propTypes = {
    chat: PropTypes.shape({
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
            readBy: PropTypes.arrayOf(PropTypes.string).isRequired,
            attachments: PropTypes.arrayOf(PropTypes.shape({
                url: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired
            })),
            createdAt: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default ChatWindow;

// CSS to be added to src/styles/style.css
/*
.chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #fff;
    position: relative;
}

.chat-window-header {
    padding: 16px;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat-window-header h2 {
    margin: 0;
    font-size: 18px;
    color: #333;
}

.chat-window-status {
    font-size: 14px;
    color: #4caf50;
}

.chat-window-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
}

.scroll-to-bottom {
    position: absolute;
    right: 20px;
    bottom: 80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e1e1e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.chat-window-footer {
    border-top: 1px solid #e1e1e1;
    padding: 16px;
}

.typing-indicator {
    font-size: 13px;
    color: #666;
    font-style: italic;
    margin-bottom: 8px;
}
*/