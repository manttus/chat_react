import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice/authSlice";
import messageReducer from "./slices/messageSlice/messageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});

export default store;
