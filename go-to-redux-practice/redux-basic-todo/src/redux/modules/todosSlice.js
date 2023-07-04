// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초깃값
const initialState = {
  todos: [],
  error: "",
  isLoading: false,
  isError: false,
};

//thunk 함수 (비동기 함수 처리 -> createAsyncThunk)
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.fulfillWithValue(e);
    }
  },
);

// 액션생성 함수 + 리듀서
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
