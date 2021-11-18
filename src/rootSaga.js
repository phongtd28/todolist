import { all, fork, takeLatest } from "@redux-saga/core/effects";
import {
  addTodos,
  deleteTodos,
  updateTodos,
} from "./container/FormContainer/action";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./container/FormContainer/constant";
import {
  watchFetchTodos,
  workAddTodo,
  workDeleteTodo,
  workUpdateTodo,
} from "./container/FormContainer/saga";
export default function* rootSaga() {
  yield all([
    fork(watchFetchTodos),
    takeLatest(DELETE_TODO, workDeleteTodo),
    takeLatest(ADD_TODO, workAddTodo),
    takeLatest(UPDATE_TODO, workUpdateTodo),
  ]);
}
