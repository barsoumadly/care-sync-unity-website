import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/doctors`;

const getDoctorById = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getDoctorProfile = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateDoctorProfile = async function (doctorData) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    await axios.put(`${API_URL}/profile`, doctorData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getDoctorSchedule = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/schedule`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data.schedule;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getMyClinics = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/my-clinics`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAppointmentsById = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/appointments/clinic/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export {
  getDoctorProfile,
  getDoctorById,
  updateDoctorProfile,
  getDoctorSchedule,
  getMyClinics,
  getAppointmentsById,
};
