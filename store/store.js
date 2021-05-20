import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserReducer from "./slices/authenticationSlice";
import notificationReducer from "./slices/notificationSlice";

// REDUX STORE
const store = configureStore({
  reducer: {
    userAuthentication: authenticatedUserReducer,
    notification: notificationReducer,
  },
});

export default store;
