import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/medicine-orders";

const addMedicinesOrder = async function (order) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    await axios.post(
      `${API_URL}/`,
      { order },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getMedicineOrders = async function () {
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

const getMedicineOrdersById = async function (id) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMedicineOrdersByPharmacyId = async function (id) {
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

const editMedicineOrderStatus = async function (id, data) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.put(`${API_URL}/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getMedicineOrders,
  getMedicineOrdersById,
  getMedicineOrdersByPharmacyId,
  editMedicineOrderStatus,
  addMedicinesOrder,
};
