import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlices";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
