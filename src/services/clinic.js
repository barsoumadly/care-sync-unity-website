import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/clinics";

const updateClinicProfile = async function (clinicData) {
  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    phone: clinicData.phoneNumber,
    address: {
      city: clinicData.selectedCity,
      state: clinicData.selectedArea,
      street: clinicData.address,
    },
    founded: clinicData.founded,
    biography: clinicData.biography,
  };

  try {
    await axios.put(`${API_URL}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};
