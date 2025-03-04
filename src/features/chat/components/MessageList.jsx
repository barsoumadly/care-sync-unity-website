import { memo } from 'react';
import PropTypes from 'prop-types';

const MessageGroup = memo(({ messages, isOwn, participant }) => {
    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    const renderAttachments = (attachments) => {
        if (!attachments?.length) return null;

        return (
            <div className="message-attachments">
                {attachments.map((attachment, index) => (
                    <div key={index} className="attachment">
                        {attachment.type === 'image' ? (
                            <img 
                                src={attachment.url} 
                                alt="attachment" 
                                className="attachment-image"
                                loading="lazy"
                            />
                        ) : (
                            <a 
                                href={attachment.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="attachment-file"
                            >
                                📎 Download Attachment
                            </a>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={`message-group ${isOwn ? 'own' : ''}`}>
            {!isOwn && (
                <div className="message-sender">
                    {participant?.name || 'Unknown User'}
                </div>
            )}
            <div className="message-bubble-group">
                {messages.map(message => (
                    <div key={message._id} className="message-bubble">
                        {renderAttachments(message.attachments)}
                        {message.content && (
                            <div className="message-content">
                                {message.content}
                            </div>
                        )}
                        <div className="message-time">
                            {formatTime(message.createdAt)}
                            {message.readBy.length > 0 && isOwn && (
                                <span className="message-read-status">
                                    ✓✓
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

MessageGroup.propTypes = {
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
    })).isRequired,
    isOwn: PropTypes.bool.isRequired,
    participant: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
};

MessageGroup.displayName = 'MessageGroup';

function MessageList({ messages, participants }) {
    // Group consecutive messages from the same sender
    const groupedMessages = messages.reduce((groups, message) => {
        const lastGroup = groups[groups.length - 1];
        const userId = localStorage.getItem('userId');
        const isOwn = message.sender === userId;
        
        if (
            lastGroup && 
            lastGroup.messages[0].sender === message.sender &&
            // Only group messages within 5 minutes of each other
            new Date(message.createdAt) - new Date(lastGroup.messages[0].createdAt) < 5 * 60 * 1000
        ) {
            lastGroup.messages.push(message);
        } else {
            groups.push({
                messages: [message],
                isOwn,
                participant: !isOwn 
                    ? participants.find(p => p._id === message.sender)
                    : null
            });
        }
        
        return groups;
    }, []);

    return (
        <div className="message-list">
            {groupedMessages.map(group => (
                <MessageGroup 
                    key={group.messages[0]._id}
                    messages={group.messages}
                    isOwn={group.isOwn}
                    participant={group.participant}
                />
            ))}
        </div>
    );
}

MessageList.propTypes = {
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
    })).isRequired,
    participants: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};

export default MessageList;

// CSS to be added to src/styles/style.css
/*
.message-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.message-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 70%;
}

.message-group.own {
    align-self: flex-end;
    align-items: flex-end;
}

.message-sender {
    font-size: 13px;
    color: #666;
    margin-bottom: 4px;
}

.message-bubble-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.message-bubble {
    background: #f1f1f1;
    padding: 8px 12px;
    border-radius: 16px;
    position: relative;
}

.message-group.own .message-bubble {
    background: #e3f2fd;
}

.message-content {
    font-size: 14px;
    color: #333;
    white-space: pre-wrap;
    word-break: break-word;
}

.message-time {
    font-size: 11px;
    color: #666;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.message-read-status {
    color: #2196f3;
    font-size: 12px;
}

.message-attachments {
    margin-bottom: 8px;
}

.attachment-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    cursor: pointer;
}

.attachment-file {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    color: #333;
    text-decoration: none;
    font-size: 14px;
}

.attachment-file:hover {
    background: #f5f5f5;
}
*/