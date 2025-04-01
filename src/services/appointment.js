import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}`;

const getAppointmentsByPatient = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/patients/appointments`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAppointmentsByPatient };
