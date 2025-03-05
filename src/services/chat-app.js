import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const createChat = async function (userId, token) {
  return await axios.post(
    `${API_URL}/chats`,
    {
      type: "direct",
      participants: [userId],
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(chat);
};

export { createChat };
