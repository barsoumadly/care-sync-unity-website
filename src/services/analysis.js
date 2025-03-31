import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/analysis`;

const addAnalysisList = async function (analysisList) {
  const token = JSON.parse(localStorage.getItem("key"));

  const analysis = analysisList.map((analysis) => {
    return {
      name: analysis.analysis_name,
      price: Number(analysis.price),
      details: analysis.details,
    };
  });

  try {
    await axios.post(`${API_URL}/`, analysis, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAnalysisList = async function () {
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

const getAnalysisListById = async function (id) {
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

const editAnalysisDetails = async function (analysisId, analysisData) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.put(
      `${API_URL}/`,
      { analysisId, analysisData },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAnalysis = async function (analysisId) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.delete(`${API_URL}/${analysisId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  addAnalysisList,
  getAnalysisList,
  editAnalysisDetails,
  deleteAnalysis,
  getAnalysisListById,
};
