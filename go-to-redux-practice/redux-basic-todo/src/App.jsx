import React from "react";
import { __getTodos } from "./redux/modules/todosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  //side effect -> mount 될 때 처리
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h1>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </h1>
    </>
  );
};

export default App;
