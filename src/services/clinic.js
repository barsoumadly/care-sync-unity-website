import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/clinics";

const updateClinicProfile = async function (clinicData) {
  const formData = new FormData();

  const photos = clinicData.images.map((image) =>
    formData.append("image", image)
  );

  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    name: clinicData.clinicName,
    phone: clinicData.mobile,
    address: {
      city: clinicData.selectedCity,
      state: clinicData.selectedArea,
      street: clinicData.address,
    },
    founded: clinicData.founded,
    biography: clinicData.biography,
    photos,
  };

  try {
    await axios.put(`${API_URL}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getClinicProfile = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/own`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const addDoctor = async function (doctorData) {
  const token = JSON.parse(localStorage.getItem("key"));
  const data = {
    name: doctorData.doctorName,
    gender: doctorData.gender,
    schedule: doctorData.doctorShedule,
    email: doctorData.email,
    password: doctorData.password,
    specialization: doctorData.specialization,
  };

  try {
    await axios.post(`${API_URL}/doctors`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

export { updateClinicProfile, getClinicProfile, addDoctor };
