import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

//app 전체에서 counter라는 reducer를 쓸 수 있음
const rootReducer = combineReducers({
  counter,
});
const store = createStore(rootReducer);

export default store;
