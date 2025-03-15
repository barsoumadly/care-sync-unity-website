import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/analysis-orders";

const addAnalysisOrder = async function (data) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    await axios.post(
      `${API_URL}/`,
      { data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getAnalysisOrdersByUserId = async function () {
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

const getAnalysisOrdersById = async function (id) {
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

const getAnalysisOrdersByLaboratoryId = async function () {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(`${API_URL}/laboratory`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editAnalysisOrderStatus = async function (id, data) {
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
  addAnalysisOrder,
  getAnalysisOrdersByUserId,
  getAnalysisOrdersById,
  getAnalysisOrdersByLaboratoryId,
  editAnalysisOrderStatus,
};
