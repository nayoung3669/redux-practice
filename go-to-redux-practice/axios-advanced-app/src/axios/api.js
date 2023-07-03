import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1, // 0.001초가 지나면 error로 간주함
});

//req와 res 사이의 작업
//인자로 항상 콜백함수 2개가 들어감
instance.interceptors.request.use(
  //요청을 보내기 전 수행되는 함수
  function (config) {
    console.log("인터셉터 요청 성공!");
    return config;
  },

  //오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log("인터셉터 요청 오류!");
    return Promise.reject(error); //오류 처리
  },
);

instance.interceptors.response.use(
  //응답을 내보내기 전 수행되는 함수
  function (response) {
    console.log("인터셉터 응답 받았습니다!");
    return response;
  },

  //오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log("인터셉터 응답 오류 발생!");
    return Promise.reject(error);
  },
);

export default instance;

//fetchTodos 의 get 요청이 실행되면서 axios를 콜하게되고, 인터셉터 요청과 응답이 실행됨.
