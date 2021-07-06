import { combineReducers } from "redux";
import authReducer from "./authReducer";
import itemReducer from "./itemRudecers";

const rootReducer = combineReducers({
  items: itemReducer,
  user: authReducer,
});

export default rootReducer;
