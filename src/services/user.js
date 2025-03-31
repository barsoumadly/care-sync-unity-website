import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;

const updateProfilePhoto = async function (profilePhoto) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const formData = new FormData();
    formData.append("photo", profilePhoto);

    await axios.put(`${API_URL}/profile-photo`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async function (userId) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const response = await axios.get(`${API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { updateProfilePhoto, getUser };
