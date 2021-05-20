import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  notificationContent: null,
};

// LOGGED IN USER SLICE
const notificationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    displayNotification: (state, action) => {
      state.notificationContent = action.payload;
    },
    hideNotification: (state) => {
      state.notificationContent = null;
    },
  },
});

export default notificationSlice.reducer;
export const {
  displayNotification,
  hideNotification,
} = notificationSlice.actions;
