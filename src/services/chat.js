import io from "socket.io-client";

class ChatService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.token = null;
  }

  // Parse token from string if needed
  parseToken(token) {
    if (!token) return null;
    try {
      return typeof token === "string" ? JSON.parse(token) : token;
    } catch {
      return token;
    }
  }

  // Initialize WebSocket connection
  initializeSocket(token) {
    if (this.socket) {
      return;
    }

    this.token = this.parseToken(token);

    if (!this.token) {
      throw new Error("No authentication token provided");
    }

    const baseUrl = import.meta.env.VITE_API_URL.replace("/api/v1", "");

    try {
      const socketOpts = {
        auth: {
          token: `Bearer ${this.token}`, // Include Bearer prefix
        },
        secure: true,
        rejectUnauthorized: false,
        transports: ["polling", "websocket"],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: this.maxReconnectAttempts,
        timeout: 20000,
        autoConnect: false,
      };

      this.socket = io(baseUrl, socketOpts);
      this.socket.connect();
      this.setupSocketListeners();
    } catch (error) {
      console.error("Socket connection error:", error);
      throw error;
    }
  }

  // Set up core WebSocket event listeners
  setupSocketListeners() {
    this.socket.on("connect", () => {
      console.log("Connected to chat server");
      this.reconnectAttempts = 0;
      this.emit("connection:status", { status: "connected" });
    });

    this.socket.on("connect_error", (error) => {
      console.error("Chat connection error:", error);
      let errorMessage = error.message;

      // Check for authentication errors
      if (error.message.includes("Authentication")) {
        errorMessage = "Authentication failed. Please log in again.";
      }

      this.emit("connection:status", {
        status: "error",
        error: errorMessage,
      });
    });

    this.socket.on("disconnect", (reason) => {
      console.log("Disconnected from chat server:", reason);
      this.emit("connection:status", {
        status: "disconnected",
        reason,
      });
    });

    // Chat events
    this.socket.on("message:received", (data) => {
      this.emit("message:received", data);
    });

    this.socket.on("message:sent", (data) => {
      this.emit("message:sent", data);
    });

    this.socket.on("message:read", (data) => {
      this.emit("message:read", data);
    });

    // User status events
    this.socket.on("user:online", (data) => {
      this.emit("user:online", data);
    });

    this.socket.on("user:offline", (data) => {
      this.emit("user:offline", data);
    });

    // Typing status events
    this.socket.on("typing:status", (data) => {
      this.emit("typing:status", data);
    });

    this.socket.on("error", (error) => {
      console.error("Chat error:", error);
      this.emit("error", error);
    });
  }

  // Helper to validate token exists
  validateToken() {
    if (!this.token) {
      throw new Error("No authentication token set");
    }
  }

  // Helper to handle API responses
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || response.statusText);
    }
    const data = await response.json();
    return data.data;
  }

  // REST API Methods

  // Get all chats for the current user
  async getChats() {
    try {
      this.validateToken();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chats`, {
        headers: this.getHeaders(),
      });
      const data = await this.handleResponse(response);
      return data.chats;
    } catch (error) {
      console.error("Error fetching chats:", error);
      throw error;
    }
  }

  // Get a specific chat by ID
  async getChatById(chatId) {
    try {
      this.validateToken();
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/chats/${chatId}`,
        {
          headers: this.getHeaders(),
        }
      );
      const data = await this.handleResponse(response);
      return data.chat;
    } catch (error) {
      console.error("Error fetching chat:", error);
      throw error;
    }
  }

  // Create a new chat
  async createChat(type, participants, name = null) {
    try {
      this.validateToken();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chats`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          type,
          participants,
          ...(name && { name }),
        }),
      });
      const data = await this.handleResponse(response);
      return data.chat;
    } catch (error) {
      console.error("Error creating chat:", error);
      throw error;
    }
  }

  // Archive a chat
  async archiveChat(chatId) {
    try {
      this.validateToken();
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/chats/${chatId}/archive`,
        {
          method: "PATCH",
          headers: this.getHeaders(),
        }
      );
      const data = await this.handleResponse(response);
      return data.chat;
    } catch (error) {
      console.error("Error archiving chat:", error);
      throw error;
    }
  }

  // Upload attachment
  async uploadAttachment(chatId, file) {
    try {
      this.validateToken();
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/chats/${chatId}/attachments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          body: formData,
        }
      );
      const data = await this.handleResponse(response);
      return data.attachment;
    } catch (error) {
      console.error("Error uploading attachment:", error);
      throw error;
    }
  }

  // WebSocket Methods

  // Send a message
  sendMessage(chatId, content, attachments = []) {
    if (!this.socket?.connected) {
      throw new Error("Not connected to chat server");
    }

    this.socket.emit("message:send", {
      chatId,
      content,
      attachments,
    });
  }

  // Update typing status
  sendTypingStatus(chatId, isTyping) {
    if (!this.socket?.connected) {
      return;
    }

    this.socket.emit(isTyping ? "typing:start" : "typing:stop", { chatId });
  }

  // Mark message as read
  markMessageAsRead(chatId, messageId) {
    if (!this.socket?.connected) {
      return;
    }

    this.socket.emit("message:read", {
      chatId,
      messageId,
    });
  }

  // Event listener management
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  off(event, callback) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.delete(callback);
    }
  }

  emit(event, data) {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  // Utility methods
  getHeaders() {
    this.validateToken();
    return {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.token = null;
  }
}

// Create and export singleton instance
const chatService = new ChatService();
export default chatService;
