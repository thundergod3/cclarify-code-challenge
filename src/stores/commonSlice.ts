import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false as boolean,
};

const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsDarkMode: (state, { payload }) => {
      state.isDarkMode = payload;
    },
  },
});

export const commonReducer = CommonSlice.reducer;

export const { setIsDarkMode } = CommonSlice.actions;
