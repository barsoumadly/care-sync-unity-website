import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/users/profile-photo";

const updateProfilePhoto = async function (profilePhoto, token) {
  try {
    await axios.put(
      `${API_URL}`,
      { file: { path: profilePhoto.name } },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export { updateProfilePhoto };
