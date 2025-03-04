import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import chatService from "../services/chat.js";
import { useAuth } from "./AuthContext";

const ChatContext = createContext(null);

// Initial state
const initialState = {
  chats: [],
  activeChat: null,
  loading: false,
  error: null,
  onlineUsers: new Set(),
  typingUsers: new Map(), // chatId -> Set of typing user IDs
  connectionStatus: "disconnected",
};

// Action types
const ACTIONS = {
  SET_CHATS: "SET_CHATS",
  SET_ACTIVE_CHAT: "SET_ACTIVE_CHAT",
  ADD_MESSAGE: "ADD_MESSAGE",
  UPDATE_MESSAGE: "UPDATE_MESSAGE",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_USER_ONLINE: "SET_USER_ONLINE",
  SET_USER_OFFLINE: "SET_USER_OFFLINE",
  SET_USER_TYPING: "SET_USER_TYPING",
  SET_CONNECTION_STATUS: "SET_CONNECTION_STATUS",
};

// Reducer function
function chatReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_CHATS:
      return {
        ...state,
        chats: action.payload,
        loading: false,
        error: null,
      };

    case ACTIONS.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
      };

    case ACTIONS.ADD_MESSAGE: {
      const { chatId, message } = action.payload;
      const updatedChats = state.chats.map((chat) => {
        if (chat._id === chatId) {
          return {
            ...chat,
            messages: [...chat.messages, message],
          };
        }
        return chat;
      });

      // If it's the active chat, update it too
      const updatedActiveChat =
        state.activeChat?._id === chatId
          ? {
              ...state.activeChat,
              messages: [...state.activeChat.messages, message],
            }
          : state.activeChat;

      return {
        ...state,
        chats: updatedChats,
        activeChat: updatedActiveChat,
      };
    }

    case ACTIONS.UPDATE_MESSAGE: {
      const { chatId, messageId, updates } = action.payload;
      const updatedChats = state.chats.map((chat) => {
        if (chat._id === chatId) {
          return {
            ...chat,
            messages: chat.messages.map((msg) =>
              msg._id === messageId ? { ...msg, ...updates } : msg
            ),
          };
        }
        return chat;
      });

      // Update active chat if needed
      const updatedActiveChat =
        state.activeChat?._id === chatId
          ? {
              ...state.activeChat,
              messages: state.activeChat.messages.map((msg) =>
                msg._id === messageId ? { ...msg, ...updates } : msg
              ),
            }
          : state.activeChat;

      return {
        ...state,
        chats: updatedChats,
        activeChat: updatedActiveChat,
      };
    }

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ACTIONS.SET_USER_ONLINE: {
      const newOnlineUsers = new Set(state.onlineUsers);
      newOnlineUsers.add(action.payload);
      return {
        ...state,
        onlineUsers: newOnlineUsers,
      };
    }

    case ACTIONS.SET_USER_OFFLINE: {
      const newOnlineUsers = new Set(state.onlineUsers);
      newOnlineUsers.delete(action.payload);
      return {
        ...state,
        onlineUsers: newOnlineUsers,
      };
    }

    case ACTIONS.SET_USER_TYPING: {
      const { chatId, userId, isTyping } = action.payload;
      const newTypingUsers = new Map(state.typingUsers);

      if (!newTypingUsers.has(chatId)) {
        newTypingUsers.set(chatId, new Set());
      }

      const chatTypingUsers = newTypingUsers.get(chatId);
      if (isTyping) {
        chatTypingUsers.add(userId);
      } else {
        chatTypingUsers.delete(userId);
      }

      return {
        ...state,
        typingUsers: newTypingUsers,
      };
    }

    case ACTIONS.SET_CONNECTION_STATUS:
      return {
        ...state,
        connectionStatus: action.payload,
      };

    default:
      return state;
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const { user, isAuthenticated } = useAuth();

  // Get token from localStorage
  const getToken = () => {
    const tokenStr = localStorage.getItem("key");
    if (!tokenStr) return null;
    return JSON.parse(tokenStr);
  };

  useEffect(() => {
    // Only initialize if authenticated
    if (!isAuthenticated) return;

    const token = getToken();
    if (!token) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "No authentication token found",
      });
      return;
    }

    // Initialize chat service and load chats
    const initializeChat = async () => {
      try {
        dispatch({ type: ACTIONS.SET_LOADING, payload: true });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });

        // Set initial state
        dispatch({ type: ACTIONS.SET_CONNECTION_STATUS, payload: "connecting" });

        // Initialize WebSocket connection with token
        await chatService.initializeSocket(token);

        // Wait for successful connection before loading chats
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            reject(new Error('Connection timeout'));
          }, 5000);

          const handleConnect = () => {
            clearTimeout(timeoutId);
            resolve();
          };

          chatService.on("connection:status", ({ status, error }) => {
            if (status === "connected") {
              handleConnect();
            } else if (error) {
              clearTimeout(timeoutId);
              reject(new Error(error));
            }
          });
        });

        // Load initial chats
        const chats = await chatService.getChats();
        dispatch({ type: ACTIONS.SET_CHATS, payload: chats });
      } catch (err) {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: `Failed to initialize chat: ${err.message}`,
        });
      }
    };

    // Set up socket event listeners
    const setupEventListeners = () => {
      // Connection status
      chatService.on("connection:status", ({ status, error }) => {
        dispatch({
          type: ACTIONS.SET_CONNECTION_STATUS,
          payload: status,
        });
        
        if (error) {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: `Connection error: ${error}`,
          });
        }
      });

      // Message events
      chatService.on("message:received", ({ chatId, message }) => {
        dispatch({
          type: ACTIONS.ADD_MESSAGE,
          payload: { chatId, message },
        });
      });

      chatService.on("message:sent", ({ chatId, message }) => {
        dispatch({
          type: ACTIONS.ADD_MESSAGE,
          payload: { chatId, message },
        });
      });

      chatService.on("message:read", ({ chatId, messageId, readBy }) => {
        dispatch({
          type: ACTIONS.UPDATE_MESSAGE,
          payload: {
            chatId,
            messageId,
            updates: { readBy },
          },
        });
      });

      // User status events
      chatService.on("user:online", ({ userId }) => {
        dispatch({
          type: ACTIONS.SET_USER_ONLINE,
          payload: userId,
        });
      });

      chatService.on("user:offline", ({ userId }) => {
        dispatch({
          type: ACTIONS.SET_USER_OFFLINE,
          payload: userId,
        });
      });

      // Typing status events
      chatService.on("typing:status", ({ chatId, userId, isTyping }) => {
        dispatch({
          type: ACTIONS.SET_USER_TYPING,
          payload: { chatId, userId, isTyping },
        });
      });
    };

    initializeChat();
    setupEventListeners();

    // Cleanup
    return () => {
      dispatch({ type: ACTIONS.SET_CONNECTION_STATUS, payload: "disconnected" });
      dispatch({ type: ACTIONS.SET_ERROR, payload: null });
      dispatch({ type: ACTIONS.SET_CHATS, payload: [] });
      dispatch({ type: ACTIONS.SET_ACTIVE_CHAT, payload: null });
      chatService.disconnect();
    };
  }, [isAuthenticated]); // Re-initialize when auth state changes

  // Chat management methods
  const createChat = async (type, participants, name = null) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const chat = await chatService.createChat(type, participants, name);
      dispatch({
        type: ACTIONS.SET_CHATS,
        payload: [...state.chats, chat],
      });
      return chat;
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: `Failed to create chat: ${err.message}`,
      });
      throw err;
    }
  };

  const setActiveChat = async (chatId) => {
    try {
      const chat = await chatService.getChatById(chatId);
      dispatch({ type: ACTIONS.SET_ACTIVE_CHAT, payload: chat });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: `Failed to load chat: ${err.message}`,
      });
    }
  };

  const sendMessage = (chatId, content, attachments = []) => {
    try {
      chatService.sendMessage(chatId, content, attachments);
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: `Failed to send message: ${err.message}`,
      });
    }
  };

  const uploadAttachment = async (chatId, file) => {
    try {
      return await chatService.uploadAttachment(chatId, file);
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Failed to upload attachment",
      });
      throw error;
    }
  };

  const markMessageAsRead = (chatId, messageId) => {
    chatService.markMessageAsRead(chatId, messageId);
  };

  const updateTypingStatus = (chatId, isTyping) => {
    chatService.sendTypingStatus(chatId, isTyping);
  };

  const value = {
    ...state,
    createChat,
    setActiveChat,
    sendMessage,
    uploadAttachment,
    markMessageAsRead,
    updateTypingStatus,
    user, // Include authenticated user
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for using chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
