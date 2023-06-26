import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./redux/modules/counter";

function App() {
  //store에 접근해 counter의 값을 읽어오기
  //useSelector hook 이용
  const data = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  console.log(data);

  return (
    <div className="App">
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      현재 카운트: {data.counter.number}
    </div>
  );
}

export default App;
