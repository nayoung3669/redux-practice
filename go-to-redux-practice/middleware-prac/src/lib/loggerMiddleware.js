const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); //
  console.log("이전 상태: ", store.getState());
  console.log("액션 : ", action);
  next(action); //다음 미들웨어에 전달 또는 없다면 리듀서에게 전달
  console.log("다음 상태: ", store.getState()); //업뎃된 상태
  console.groupEnd(); //그룹 끝
};

//store은 redux store 인스턴스, action은 디스패치 된 액션

export default loggerMiddleware;
