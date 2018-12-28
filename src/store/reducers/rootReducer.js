import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import enterpriseReducer from "./enterpriseReducer";
import branchReducer from "./branchReducer";
import foodReducer from "./foodReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  food: foodReducer,
  enterprise: enterpriseReducer,
  branch: branchReducer
});

export default rootReducer;
