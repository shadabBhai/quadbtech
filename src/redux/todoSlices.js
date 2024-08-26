import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch tasks from an API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.data;
});

// Create a slice of the state
const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleTaskDone(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    toggleTaskImportant(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
    // Add other reducers as needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleTaskDone, toggleTaskImportant } = todoSlices.actions;

export default todoSlices.reducer;
