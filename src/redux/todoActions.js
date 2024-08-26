import axios from "axios";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  DELETE_TODO,
} from "./actionTypes";

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, error });
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    dispatch({ type: ADD_TODO, payload: response.data });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  };
};
