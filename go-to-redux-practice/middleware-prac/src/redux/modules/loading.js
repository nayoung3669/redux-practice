import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

// 요청을 위한 액션 타입 (requestType) 은 payload로 설정함!
// 객체를 편하게 전달하기 위해 createAction 사용함
export const startLoading = createAction(
  START_LOADING,
  (requsetType) => requsetType,
);

//requestType 예시 : "sample/GET_POST"

export const finishLoading = createAction(
  FINISH_LOADING,
  (requsetType) => requsetType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
      //payload로 type 이름 전달했음
      //initialState에 이미 있다면 속성 변경, 없다면 속성 추가
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
