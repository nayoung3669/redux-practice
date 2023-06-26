export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

//초기 상태 값

const initialState = {
  number: 0,
};

//리듀서: state를 action의 type에 따라서 변경하는 함수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "counter/INCREASE":
      return {
        number: state.number + 1,
      };
    case "counter/DECREASE":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
