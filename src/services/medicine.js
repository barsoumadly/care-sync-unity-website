import axios from "axios";

// const API_URL = "http://localhost:8000/api/v1/medicines";

const API_URL = `${import.meta.env.VITE_API_URL}/medicines`;

const addMedicineList = async function (medicineList) {
  const token = JSON.parse(localStorage.getItem("key"));

  const medicines = medicineList.map((medicine) => {
    return {
      name: medicine.medicine_name,
      quantity: Number(medicine.quantity),
      price: Number(medicine.price),
      expirationDate: medicine.expiration_date,
    };
  });

  try {
    await axios.post(`${API_URL}/`, medicines, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getMedicinesList = async function () {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editMedicineDetails = async function (medicineId, medicineData) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.put(
      `${API_URL}/`,
      { medicineId, medicineData },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteMedicine = async function (medicineId) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.delete(`${API_URL}/${medicineId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMedicinesListByPharamcyId = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/pharmacy/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  addMedicineList,
  getMedicinesList,
  editMedicineDetails,
  deleteMedicine,
  getMedicinesListByPharamcyId,
};
