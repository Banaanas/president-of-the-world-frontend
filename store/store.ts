import { configureStore } from "@reduxjs/toolkit";

import authenticatedUserReducer from "./slices/authenticationSlice";

// REDUX STORE
const store = configureStore({
  reducer: {
    userAuthentication: authenticatedUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
