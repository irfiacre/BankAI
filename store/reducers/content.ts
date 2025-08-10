import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FileContent {
  content: Array<object>|null;
}

const initialState: FileContent = {
  content: null,
};

export const fileSlice = createSlice({
  name: "fileContent",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<Array<object>>) => {
      state.content = action.payload;
    },
    resetContent: (state) => {
      state.content = initialState.content;
    },
  },
});

export const { setContent, resetContent } = fileSlice.actions;

export default fileSlice.reducer;
