import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/prescriptions";

const getPrescriptionsByPatientId = async function () {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

const createPrescription = async function (data) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.post(`${API_URL}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPrescriptionsByPatientId, createPrescription };
