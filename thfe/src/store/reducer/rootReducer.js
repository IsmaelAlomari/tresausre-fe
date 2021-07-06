import { combineReducers } from "redux";

import itemReducer from "./itemRudecers";

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
