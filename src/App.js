import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    console.log("data", data);
    setTodos(data);
  };

  const onSubmitHandler = () => {};

  useEffect(() => {
    //db로 부터 값 가져오기
    fetchTodos();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => prev.concat(inputValue));
    setInputValue({ title: "" });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue.title}
          onChange={(e) => setInputValue({ title: e.target.value })}
        />
        <button type="submit">추가</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.id} : {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
