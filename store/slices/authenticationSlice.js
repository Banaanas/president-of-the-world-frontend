import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  user: null,
  isAuthenticated: false,
};

// LOGGED IN USER SLICE
const authenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    getAuthenticatedUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    resetAuthenticatedUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default authenticationSlice.reducer;
export const { getAuthenticatedUser, resetAuthenticatedUser } =
  authenticationSlice.actions;
