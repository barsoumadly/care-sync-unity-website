import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/patients`;

const updatePatientProfile = async function (patientData) {
  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    phone: patientData.phoneNumber,
    dateOfBirth: patientData.birthDate,
    gender: patientData.gender,
    address: {
      city: patientData.selectedCity,
      area: patientData.selectedArea,
      address: patientData.address,
    },
    temperature: patientData.temperature,
    weight: patientData.weight,
    height: patientData.height,
    heartRate: patientData.heartRate,
    bloodType: patientData.bloodType,
    bloodSugar: patientData.bloodSugar,
    bloodPressure: patientData.bloodPressure,
  };

  try {
    await axios.put(`${API_URL}/profile`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getPatientProfile = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getPatientById = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { updatePatientProfile, getPatientProfile, getPatientById };
