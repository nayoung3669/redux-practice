// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  //thunk action creator 을 반환함
  "getTodos", //첫번째 인자 문자열
  //thunkAPI는 비동기함수
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      console.log(response.data);
      // toolkit에서 제공하는 API
      return thunkAPI.fulfillWithValue(response.data); //Promise가 resolved 된 경우 dispatch 해주는 API
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e); //rejected 된 경우 dispatch 해주는 API
    }
  },
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload; //에러 객체 생성
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
