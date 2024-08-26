import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  DELETE_TODO,
} from "./actionTypes";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: "",
      };
    case FETCH_TODOS_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.error.message,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
