import { combineReducers } from "redux";
import signInReducer from "../pages/SignIn/reducers";

export const rooteReducer = () => {
  return combineReducers({
    auth: signInReducer,
  });
};
