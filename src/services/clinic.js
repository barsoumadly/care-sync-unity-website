import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:8000/api/v1/clinics";

const updateClinicProfile = async function (clinicData) {
  const formData = new FormData();

  clinicData?.images?.map((image) => formData.append("photos", image.url));
  formData.append("name", clinicData.name);
  formData.append("phone", clinicData.phone);
  formData.append("address[city]", clinicData.city);
  formData.append("address[state]", clinicData.state);
  formData.append("address[street]", clinicData.street);
  formData.append("founded", clinicData.founded);
  formData.append("biography", clinicData.biography);

  const token = JSON.parse(localStorage.getItem("key"));
  console.log(formData.photos);

  try {
    await axios.put(`${API_URL}/`, formData, {
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

const getClinics = async function () {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getClinic = async function (id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getDoctorList = async function () {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(`${API_URL}/own-doctors`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    return error.response.status;
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
    price: doctorData.price,
  };

  try {
    await axios.post(`${API_URL}/doctors`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    return error.response.data.message;
  }
};

const updateDoctor = async function (doctorData, doctorId) {
  const formData = new FormData();

  formData.append("name", doctorData.name);
  formData.append("email", doctorData.email);
  formData.append("gender", doctorData.gender);
  formData.append("password", doctorData.password);
  formData.append("specialization", doctorData.specialization);

  doctorData.doctorShedule.map((schedule) => {
    formData.append("schedule[day]", schedule.day);
    formData.append("schedule[startTime]", schedule.startTime);
    formData.append("schedule[endTime]", schedule.endTime);
  });

  const token = JSON.parse(localStorage.getItem("key"));
  try {
    await axios.put(`${API_URL}/doctors/${doctorId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteDoctor = async function (doctorId) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.delete(`${API_URL}/doctors/${doctorId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAppointmentList = async function () {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(
      `${API_URL}/appointments/doctors-appointments`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const bookAppointment = async function (appointmentData) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    await axios.post(`${API_URL}/appointments/book`, appointmentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const editAppointment = async function (appointmentData) {
  const token = JSON.parse(localStorage.getItem("key"));
  try {
    await axios.post(`${API_URL}/doctors`, appointmentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};

const getPatientList = async function (doctorId) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(
      `${API_URL}/doctors/${doctorId}/appointments-queue`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getAppointmentDetails = async function (apppointmentId) {
  const token = JSON.parse(localStorage.getItem("key"));

  try {
    const response = await axios.get(
      `${API_URL}/appointments/${apppointmentId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const updateAppointment = async function (appointmentData) {
  const token = JSON.parse(localStorage.getItem("key"));
  console.log(appointmentData.appointmentId);

  const data = {
    doctorId: appointmentData.doctorId,
    scheduleId: appointmentData.scheduleId,
  };

  try {
    await axios.put(
      `${API_URL}/appointments/${appointmentData.appointmentId}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const examination = async function (appointmentId) {
  const token = JSON.parse(localStorage.getItem("key"));
  console.log(appointmentId);
  const data = {
    status: "confirmed",
  };

  try {
    await axios.put(`${API_URL}/appointments/${appointmentId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Medical examination was done");
  } catch (error) {
    toast.error(err.message);
  }
};

export {
  updateClinicProfile,
  getClinicProfile,
  getClinics,
  getClinic,
  addDoctor,
  getDoctorList,
  updateDoctor,
  deleteDoctor,
  getAppointmentList,
  bookAppointment,
  editAppointment,
  getPatientList,
  getAppointmentDetails,
  updateAppointment,
  examination,
};
