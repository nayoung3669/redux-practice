import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrease, increase } from "./redux/modules/counter";

function App() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    dispatch(increase());
  };

  const onClickMinusHandler = () => {
    dispatch(decrease());
  };

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onClickAddHandler}>+</button>
      <button onClick={onClickMinusHandler}>-</button>
    </div>
  );
}

export default App;
