import { combineReducers } from "redux";
import users from "src/redux/reducers/users";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
