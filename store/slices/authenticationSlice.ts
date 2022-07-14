/* eslint no-param-reassign: 0 */ //

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationState {
  user: string | null;
  isAuthenticated: boolean;
}

// Initial State
const initialState: AuthenticationState = {
  user: null,
  isAuthenticated: false,
};

// LOGGED IN USER SLICE
const authenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    getAuthenticatedUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    resetAuthenticatedUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export default authenticationSlice.reducer;
export const { getAuthenticatedUser, resetAuthenticatedUser } =
  authenticationSlice.actions;
