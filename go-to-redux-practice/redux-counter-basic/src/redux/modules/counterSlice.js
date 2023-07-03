import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//2개의 INPUT (이름, 함수)
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    //수행하고 싶은 동작 : 3초 기다리기
    setTimeout(() => {
      thunkAPI.dispatch(plusN(payload)); //component에서 넘겨받은 payload를 전달
    }, 3000);
  },
);

export const __minusNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    //수행하고 싶은 동작 : 3초 기다리기
    setTimeout(() => {
      thunkAPI.dispatch(minusN(payload)); //component에서 넘겨받은 payload를 전달
    }, 3000);
  },
);

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusN: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusN: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { plusN, minusN } = counterSlice.actions;
