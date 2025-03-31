import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/pharmacies`;

const updatePharmacyProfile = async function (pharmacyData) {
  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    name: pharmacyData.pharmacyName,
    phone: pharmacyData.phoneNumber,
    foundedYear: pharmacyData.foundedYear,
    address: {
      city: pharmacyData.selectedCity,
      area: pharmacyData.selectedArea,
      address: pharmacyData.address,
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

const getPharmacyProfile = async function () {
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

const getPharmacyList = async function () {
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

const getPharmacy = async function (pharmacyId) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${pharmacyId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  updatePharmacyProfile,
  getPharmacyProfile,
  getPharmacyList,
  getPharmacy,
};
