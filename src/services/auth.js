import axios from "axios";

const register = async function (userData) {
  try {
    await axios.post("http://localhost:8000/api/v1/auth/register", userData);
  } catch (error) {
    console.error(error);
  }
};

const login = async function (userData) {
  try {
    return await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      userData
    );
  } catch (error) {
    console.error(error);
  }
};

export { register, login };
