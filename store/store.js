import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserReducer from "./slices/authenticationSlice";

// REDUX STORE
const store = configureStore({
  reducer: {
    userAuthentication: authenticatedUserReducer,
  },
});

export default store;
