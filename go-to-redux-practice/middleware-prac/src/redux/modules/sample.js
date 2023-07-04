import { handleActions } from "redux-actions";
import * as api from "../../lib/api";
import createRequestThunk from "../../lib/createRequestThunk";

//액션 타입 선언
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

//thunk 함수 생성
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태
const initialState = {
  //loading 삭제
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // Loading, failure 삭제 -> createRequestThunk에서 처리해줌
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload, //데이터 전달
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
