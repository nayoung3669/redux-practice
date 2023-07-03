import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

//app 전체에서 counter라는 reducer를 쓸 수 있음
const store = configureStore({
  reducer: counter,
});

export default store;
