import axios from "axios";

// API URL
const API_URL = "http://caresyncunity.live:8000/api/v1";

const register = async function (userData) {
  try {
    await axios.post(`${API_URL}/auth/register`, userData);
  } catch (error) {
    throw error;
  }
};

const login = async function (userData) {
  try {
    return await axios.post(`${API_URL}/auth/login`, userData);
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async function (userData) {
  try {
    await axios.post(`${API_URL}/auth/request-password-reset`, userData);
  } catch (error) {
    throw error;
  }
};

const resetPassword = async function (userData) {
  try {
    return await axios.post(`${API_URL}/auth/reset-password`, userData);
  } catch (error) {
    throw error;
  }
};

export { register, login, forgotPassword, resetPassword };
