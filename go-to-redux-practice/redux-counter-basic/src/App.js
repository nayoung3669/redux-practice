import { useDispatch, useSelector } from "react-redux";
import { __minusNumber, __addNumber } from "./redux/modules/counterSlice";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    dispatch(__addNumber(+num));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(__minusNumber(+num));
  };

  return (
    <div className="App">
      <button onClick={onClickAddNumberHandler}>+</button>
      <button onClick={onClickMinusNumberHandler}>-</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(+e.target.value)}
      />
      현재 카운트: {globalNumber}
    </div>
  );
}

export default App;
