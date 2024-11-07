import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { useDispatch } from "react-redux";
import sidebarSlice from "./sidebarSlice";
import countryCodeReducer from "./countryCodeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarSlice,
    countryCode: countryCodeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
