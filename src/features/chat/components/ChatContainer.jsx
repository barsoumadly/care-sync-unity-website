import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useChat } from '../../../context/ChatContext';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

function ChatContainer({ className = '' }) {
    const { 
        chats,
        activeChat,
        loading,
        error,
        connectionStatus,
        setActiveChat
    } = useChat();

    // Handle connection status changes
    useEffect(() => {
        if (connectionStatus === 'error') {
            console.error('Chat connection error');
        }
    }, [connectionStatus]);

    if (loading) {
        return (
            <div className={`chat-container ${className}`}>
                <div className="chat-loading">
                    Loading chats...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`chat-container ${className}`}>
                <div className="chat-error">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className={`chat-container ${className}`}>
            {connectionStatus !== 'connected' && (
                <div className="chat-connection-status">
                    {connectionStatus === 'disconnected' 
                        ? 'Connecting to chat...' 
                        : 'Connection lost. Reconnecting...'}
                </div>
            )}
            
            <div className="chat-layout">
                <ChatList 
                    chats={chats}
                    activeChat={activeChat}
                    onSelectChat={setActiveChat}
                />
                
                {activeChat ? (
                    <ChatWindow chat={activeChat} />
                ) : (
                    <div className="chat-placeholder">
                        Select a chat to start messaging
                    </div>
                )}
            </div>
        </div>
    );
}

ChatContainer.propTypes = {
    className: PropTypes.string
};

export default ChatContainer;

// CSS to be added to src/styles/style.css
/*
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-connection-status {
    padding: 8px 16px;
    background: #fff3cd;
    color: #856404;
    text-align: center;
    font-size: 14px;
}

.chat-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.chat-loading,
.chat-error,
.chat-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    color: #666;
    text-align: center;
}

.chat-error {
    color: #dc3545;
}
*/