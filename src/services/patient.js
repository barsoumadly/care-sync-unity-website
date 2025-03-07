import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/patients";

const updatePatientProfile = async function (patientData, token) {
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

const getPatientProfile = async function (token) {
  try {
    return await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

export { updatePatientProfile, getPatientProfile };
