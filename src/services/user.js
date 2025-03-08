import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/users/profile-photo";

const updateProfilePhoto = async function (profilePhoto) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    const formData = new FormData();
    formData.append("photo", profilePhoto);

    await axios.put(`${API_URL}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { updateProfilePhoto };
