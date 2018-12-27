import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer
});

export default rootReducer;
