const PLUS_N = "PLUS_N";
const MINUS_N = "MINUS_N";

//action creator functions
export const plusN = (value) => {
  return {
    type: PLUS_N,
    payload: value,
  };
};

export const minusN = (value) => {
  return {
    type: MINUS_N,
    payload: value,
  };
};

//초기 상태 값
const initialState = {
  number: 0,
};

//리듀서: state를 action의 type에 따라서 변경하는 함수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
