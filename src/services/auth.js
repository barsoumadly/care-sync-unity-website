import axios from "axios";

// API URL
// const API_URL = "http://caresyncunity.live:8000/api/v1";
const API_URL = "http://localhost:8000/api/v1";

const register = async function (userData) {
  await axios.post(`${API_URL}/auth/register`, userData);
};

const verifyEmail = async function (userData) {
  await axios.post(`${API_URL}/auth/verify-email`, userData);
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

export { register, verifyEmail, login, forgotPassword, resetPassword };
