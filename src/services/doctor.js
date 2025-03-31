import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/doctors`;

const getDoctorProfile = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getDoctorProfile };
