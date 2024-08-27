import { createSlice } from "@reduxjs/toolkit";

const compeletedSlice = createSlice({
  name: "completed",
  initialState: [],
  reducer: {
    done: (state, action) => {
      state.compeleted.push();
    },
  },
});

export const { done } = compeletedSlice.actions;
export default compeletedSlice.reducer;
