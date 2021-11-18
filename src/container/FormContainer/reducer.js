import {
  ADD_TODO,
  ADD_TODO_ERR,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_ERR,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS,
  FETCH_TODOS_ERR,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_ERR,
  UPDATE_TODO_SUCCESS,
} from "./constant";

const initialState = {
  todos: [],
  loading: false,
  err: null,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload, ...state.todos],
        loading: false,
        err: null,
      };
    case FETCH_TODOS_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos],
        err: null,
      };
    case ADD_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case DELETE_TODO_SUCCESS:
      const newDeleteTodos = [...state.todos].filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        err: null,
        todos: newDeleteTodos,
      };
    case DELETE_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: true,
        err: null,
      };
    case UPDATE_TODO_SUCCESS:
      const newTodosUpdate = [...state.todos].map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        loading: false,
        todos: newTodosUpdate,
      };
    case UPDATE_TODO_ERR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
