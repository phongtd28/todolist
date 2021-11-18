import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./rootSaga";
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleWare), composeWithDevTools())
);

sagaMiddleWare.run(rootSaga);
export default store;
