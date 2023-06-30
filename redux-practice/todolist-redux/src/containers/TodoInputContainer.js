import React, { useCallback } from "react";
import TodoInput from "../components/TodoInput";
import { styled } from "styled-components";

const TodoInputContainerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-bottom: 3px solid lightgray;

  button {
    font-family: "Courier New", Courier, monospace;
    margin-right: 20px;
    margin-bottom: 2px;
    height: 36px;
    width: 5rem;
    border-radius: 15px;
    border: none;
    font-size: 1.05rem;
    font-weight: 600;
    background-color: #333333;
    color: white;
  }
`;

const TodoInputContainer = () => {
  return (
    <TodoInputContainerBlock>
      <TodoInput
      //   props
      />
      <button>ADD</button>
    </TodoInputContainerBlock>
  );
};

export default TodoInputContainer;
