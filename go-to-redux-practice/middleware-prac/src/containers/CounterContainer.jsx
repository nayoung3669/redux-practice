import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAsync, increaseAsync } from "../redux/modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    increaseAsync();
  };

  const onClickMinusHandler = () => {
    decreaseAsync();
  };

  return (
    <Counter
      number={number}
      onClickAddHandler={onClickAddHandler}
      onClickMinusHandler={onClickMinusHandler}
    />
  );
};

export default CounterContainer;
