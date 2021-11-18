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

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
  };
};
export const fetchTodosSuccess = (data) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: data,
  };
};
export const fetchTodosErr = (err) => {
  return {
    type: FETCH_TODOS_ERR,
    payload: err,
  };
};
export const addTodos = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const addTodosSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};
export const addTodosErr = (err) => {
  return {
    type: ADD_TODO_ERR,
    payload: err,
  };
};
export const deleteTodos = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const deleteTodosSuccess = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id,
  };
};
export const deleteTodosErr = (err) => {
  return {
    type: DELETE_TODO_ERR,
    payload: err,
  };
};
export const updateTodos = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
export const updateTodosSuccess = (todo) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: todo,
  };
};
export const updateTodosErr = (err) => {
  return {
    type: UPDATE_TODO_ERR,
    payload: err,
  };
};
