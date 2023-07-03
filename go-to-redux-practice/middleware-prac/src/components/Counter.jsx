import React from "react";

const Counter = ({ number, onClickAddHandler, onClickMinusHandler }) => {
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onClickAddHandler}>+</button>
      <button onClick={onClickMinusHandler}>-</button>
    </div>
  );
};

export default Counter;
