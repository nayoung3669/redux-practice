import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
