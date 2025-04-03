import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/authApi";
import { noteApi } from "./api/noteApi";
import { userApi } from "./api/userApi";
import toggleReducer from "./features/toggleSlice";
import pageTypeReducer from "./features/pageTypeSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [noteApi.reducerPath]: noteApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    toggleState: toggleReducer,
    pageTypeState: pageTypeReducer,
    userState: userReducer,
  },
  // devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      noteApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
