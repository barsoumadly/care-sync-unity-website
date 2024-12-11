import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "ddgg",
  email: "",
  password: "",
  phoneNumber: "",
  birthdate: "",
  gender: "",
  location: "",
  healthCareName: "",
  diseases: "",
  speciality: "",
  education: "",
  experience: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFullName(state, action) {
      state.fullname = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
    updatePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    updateBirthdate(state, action) {
      state.birthdate = action.payload;
    },
    updateGender(state, action) {
      state.gender = action.payload;
    },
    updateLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const {
  updateFullName,
  updateEmail,
  updatePassword,
  updateBirthdate,
  updateGender,
  updateLocation,
  updatePhoneNumber,
} = userSlice.actions;

export default userSlice.reducer;
