import { combineReducers } from "redux";
import list from "./list";

// setting both the reducer in as single reducer in store
export default combineReducers({
  list,
});
