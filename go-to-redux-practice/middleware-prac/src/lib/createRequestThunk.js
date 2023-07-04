import { startLoading, finishLoading } from "../redux/modules/loading";

const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch(startLoading(type)); //loading 시작 dispatch
    try {
      const response = await request(params); //성공
      dispatch({ type: SUCCESS, payload: response.data });
      dispatch(finishLoading(type)); //loading 종료 dispatch
    } catch (e) {
      //에러 발생
      dispatch({ type: FAILURE, payload: e, error: true });
      dispatch(finishLoading(type)); //loading 종료 dispatch
      throw e;
    }
  };
};

export default createRequestThunk;

// 사용법: createRequestThunk('GET_POST', api.getUsers)
