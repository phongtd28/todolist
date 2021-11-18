import {
  addTodosErr,
  addTodosSuccess,
  deleteTodosErr,
  deleteTodosSuccess,
  fetchTodos,
  fetchTodosErr,
  fetchTodosSuccess,
  updateTodosErr,
  updateTodosSuccess,
} from "./action";
import {
  ADD_TODO_ERR,
  ADD_TODO_SUCCESS,
  DELETE_TODO_ERR,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS,
  UPDATE_TODO_ERR,
  UPDATE_TODO_SUCCESS,
} from "./constant";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  addTodoApi,
  deleteTodoAPI,
  getTodosApi,
  updateTodoAPI,
} from "../../api/todoApi";

export function* workFetchTodos() {
  try {
    const { data } = yield call(getTodosApi);
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosErr(error));
  }
}
export function* workDeleteTodo(action) {
  const id = action.payload;
  try {
    yield call(deleteTodoAPI, id);
    // delay(1000);
    yield put(deleteTodosSuccess(id));
  } catch (err) {
    yield put(deleteTodosErr(err));
  }
}
export function* workAddTodo(action) {
  try {
    yield call(addTodoApi, action.payload);
    yield put(addTodosSuccess(action.payload));
  } catch (error) {
    yield put(addTodosErr(error));
  }
}
export function* workUpdateTodo(action) {
  try {
    yield call(updateTodoAPI, action.payload);
    yield put(updateTodosSuccess(action.payload));
  } catch (error) {
    yield put(updateTodosErr(error));
  }
}
export function* watchFetchTodos() {
  yield takeLatest(FETCH_TODOS, workFetchTodos);
}
