import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

//req와 res 사이의 작업
//인자로 항상 콜백함수 2개가 들어감
instance.interceptors.request.use(
  //요청을 보내기 전 수행되는 함수
  function (config) {
    console.log("인터셉터 요청 완료");
  },

  //오류 요청을 보내기 전 수행되는 함수
  function () {},
);

instance.interceptors.response.use(
  //응답을 내보내기 전 수행되는 함수
  function () {},

  //오류 응답을 내보내기 전 수행되는 함수
  function () {},
);

export default instance;
