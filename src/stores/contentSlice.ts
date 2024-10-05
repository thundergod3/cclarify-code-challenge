import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GenerateContentByAIPayloadType } from "src/constants/types";

import contentServices from "src/services/content.service";

export const generateContentByAI = createAsyncThunk(
  "content/generateContentByAI",
  async (body: GenerateContentByAIPayloadType) => {
    try {
      const res = await contentServices.generateContentByAI(body);

      return res;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  topicType: "My personal story" as string,
  loading: false as boolean,
  content: "" as string,
};

const ContentSlice = createSlice({
  name: "personal-story",
  initialState,
  reducers: {
    setTopicType: (state, { payload }) => {
      state.topicType = payload;
    },
    setContent: (state, { payload }) => {
      state.content = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generateContentByAI.pending, (state) => {
      state.loading = true;
      state.content = "";
    });
    builder.addCase(generateContentByAI.fulfilled, (state, { payload }) => {
      state.loading = false;

      if (payload) {
        state.content = payload as string;
      }
    });
    builder.addCase(generateContentByAI.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const contentReducer = ContentSlice.reducer;

export const { setTopicType, setContent } = ContentSlice.actions;
