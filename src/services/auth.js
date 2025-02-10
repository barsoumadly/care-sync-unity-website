import axios from "axios";

// API URL is defined in vite.config.js
// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "http://localhost:8000/api/v1";

const register = async function (userData) {
  await axios.post(`${API_URL}/auth/register`, userData);
};

const verifyEmail = async function (userData) {
  await axios.post(`${API_URL}/auth/verify-email`, userData);
};

const requestEmailVerification = async function (userData) {
  await axios.post(`${API_URL}/auth//request-email-verification`, userData);
};

const login = async function (userData) {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

const forgotPassword = async function (userData) {
  await axios.post(`${API_URL}/auth/request-password-reset`, userData);
};

const resetPassword = async function (userData) {
  return await axios.post(`${API_URL}/auth/reset-password`, userData);
};

export {
  register,
  verifyEmail,
  requestEmailVerification,
  login,
  forgotPassword,
  resetPassword,
};
