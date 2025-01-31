import axios from "axios";

const API_URL = "http://44.202.13.58:8000/api/v1";

const register = async function (userData) {
  try {
    await axios.post(`${API_URL}/auth/register`, userData);
  } catch (error) {
    console.error(error);
  }
};

const login = async function (userData) {
  try {
    return await axios.post(`${API_URL}/auth/login`, userData);
  } catch (error) {
    console.error(error);
  }
};

export { register, login };
