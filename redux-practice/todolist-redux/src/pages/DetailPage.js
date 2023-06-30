import React from "react";
import TodoItemDetail from "../components/TodoItemDetail";
import TodoTemplate from "../components/TodoTemplate";

const DetailPage = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoItemDetail />
      </TodoTemplate>
    </div>
  );
};

export default DetailPage;
