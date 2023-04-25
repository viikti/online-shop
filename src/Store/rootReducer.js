import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

export const rooteReducer = () => {
  return combineReducers({
    auth: persistReducer,
  });
};
