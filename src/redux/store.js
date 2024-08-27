import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlices";
import compeletedSlice from "./compeletedSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    compeleted: compeletedSlice,
  },
});

export default store;
