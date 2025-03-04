import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function MessageInput({ onSendMessage, onTypingStatus, onFileUpload }) {
    const [message, setMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const typingTimeoutRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, []);

    const handleTyping = () => {
        if (!isTyping) {
            setIsTyping(true);
            onTypingStatus(true);
        }

        // Clear existing timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // Set new timeout
        typingTimeoutRef.current = setTimeout(() => {
            setIsTyping(false);
            onTypingStatus(false);
        }, 2000); // Stop typing indicator after 2 seconds of no input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedMessage = message.trim();
        
        if (trimmedMessage) {
            onSendMessage(trimmedMessage);
            setMessage('');
            
            // Clear typing status
            if (isTyping) {
                setIsTyping(false);
                onTypingStatus(false);
                if (typingTimeoutRef.current) {
                    clearTimeout(typingTimeoutRef.current);
                }
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    const handleFileSelect = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            await onFileUpload(file);
            // Clear the input so the same file can be selected again
            fileInputRef.current.value = '';
        } catch (error) {
            console.error('Failed to upload file:', error);
            // You might want to show an error notification here
        }
    };

    return (
        <form className="message-input" onSubmit={handleSubmit}>
            <button
                type="button"
                className="attach-file"
                onClick={() => fileInputRef.current?.click()}
            >
                📎
            </button>
            
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                accept="image/*,.pdf,.doc,.docx,.txt"
            />

            <textarea
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    handleTyping();
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                rows={1}
            />

            <button 
                type="submit"
                className="send-message"
                disabled={!message.trim()}
            >
                📤
            </button>
        </form>
    );
}

MessageInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    onTypingStatus: PropTypes.func.isRequired,
    onFileUpload: PropTypes.func.isRequired
};

export default MessageInput;

// CSS to be added to src/styles/style.css
/*
.message-input {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 8px;
    background: #fff;
    border-radius: 8px;
}

.message-input textarea {
    flex: 1;
    min-height: 40px;
    max-height: 120px;
    padding: 8px 12px;
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    resize: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.4;
}

.message-input textarea:focus {
    outline: none;
    border-color: #2196f3;
}

.message-input button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    transition: background-color 0.2s;
}

.message-input button:hover {
    background: #f5f5f5;
}

.message-input button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.message-input .attach-file {
    font-size: 20px;
}

.message-input .send-message {
    font-size: 20px;
    color: #2196f3;
}
*/