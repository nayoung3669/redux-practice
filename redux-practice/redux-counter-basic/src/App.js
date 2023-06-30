import { useDispatch, useSelector } from "react-redux";
import { plusN, minusN } from "./redux/modules/counter";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(null);
  //store에 접근해 counter의 값을 읽어오기
  //useSelector hook 이용
  const data = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  console.log(data);

  return (
    <div className="App">
      <button onClick={() => dispatch(plusN(num))}>+</button>
      <button onClick={() => dispatch(minusN(num))}>-</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(+e.target.value)}
      />
      현재 카운트: {data.counter.number}
    </div>
  );
}

export default App;
