import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { commonReducer } from "./commonSlice";
import { contentReducer } from "./contentSlice";

const rootReducer = {
  common: commonReducer,
  content: contentReducer,
};

const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type StoreType = typeof store;
export default store;
