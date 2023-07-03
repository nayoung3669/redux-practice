import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    dispatch(increase());
  };

  const onClickMinusHandler = () => {
    dispatch(decrease());
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
