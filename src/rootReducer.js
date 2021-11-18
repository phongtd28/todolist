import { combineReducers } from "redux";
import todoReducer from "./container/FormContainer/reducer";
const rootReducer = combineReducers({
  todoReducer,
});
export default rootReducer;
