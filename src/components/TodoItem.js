import React from "react";
import { css, styled } from "styled-components";

const TodoItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 0.3px solid lightgray;
  border-radius: 8px;
  margin: 5px;

  text-decoration: none;
  color: #000;
  background-color: #fbf9d4;
  display: block;
  height: 10em;
  width: 10em;
  padding: 1em;
  box-shadow: 3px 3px 5px rgba(162, 162, 162, 0.7);

  .textBox {
    cursor: pointer;
    min-height: 120px;
  }

  ${({ id }) =>
    Number(id) % 2 === 0 &&
    css`
      background-color: #faf1fa;
    `}
  p {
    margin: 10px;
  }
  .title {
    font-size: 1.2rem;
  }

  .text {
    font-weight: 500;
    font-size: 1rem;
  }

  .icons {
    position: absolute;
    top: 81%;
    left: 66%;
    display: flex;
    justify-content: space-between;

    .delete {
      cursor: pointer;
      width: 24px;
      color: #efb1b1;
    }
    .delete:hover {
      fill: #fb2f2f;
    }
    .done {
      cursor: pointer;
      margin-left: 5px;
      width: 25px;
      color: #95b9f6;
    }
  }
`;

const TodoItem = () => {
  return (
    <TodoItemBlock>
      <div className="textBox">
        <p className="title"></p>
        <p className="text"></p>
      </div>
      <div className="icons">
        <div className="delete">{/* icon 넣기 */}</div>
        <div className="done">{/* icon 넣기 */}</div>
      </div>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
