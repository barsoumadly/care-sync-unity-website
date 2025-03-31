import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/laboratories`;

const updateLaboratoryProfile = async function (laboratoryData) {
  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    name: laboratoryData.laboratoryName,
    phone: laboratoryData.phoneNumber,
    foundedYear: laboratoryData.foundedYear,
    address: {
      city: laboratoryData.selectedCity,
      area: laboratoryData.selectedArea,
      address: laboratoryData.address,
    },
  };
  try {
    await axios.put(`${API_URL}/profile`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getLaboratoryProfile = async function () {
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

const getLaboratoryList = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getLaboratory = async function (laboratoryId) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${laboratoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  updateLaboratoryProfile,
  getLaboratoryProfile,
  getLaboratoryList,
  getLaboratory,
};
