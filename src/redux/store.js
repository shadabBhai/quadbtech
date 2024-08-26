import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
