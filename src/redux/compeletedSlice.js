import { createSlice } from "@reduxjs/toolkit";

const compeletedSlice = createSlice({
  name: "completed",
  initialState: [
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ],
  reducers: {
    done: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { done } = compeletedSlice.actions;
export default compeletedSlice.reducer;
