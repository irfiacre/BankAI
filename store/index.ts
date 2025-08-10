import { configureStore } from "@reduxjs/toolkit";
import fileContentReducer from "./reducers/content";

export const store = configureStore({
  reducer: {
    content: fileContentReducer,
  },
});
