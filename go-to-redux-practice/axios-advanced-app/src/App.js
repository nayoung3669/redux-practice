import { useEffect, useState } from "react";
import "./App.css";
import api from "./axios/api";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState(null);
  const [contents, setContents] = useState(null);

  //조회
  const fetchTodos = async () => {
    const { data } = await api.get("/todos");
    setTodos(data);
  };

  //추가
  const onSubmitHandler = async () => {
    //아이디 자동 추가됨
    api.post("/todos", inputValue);
    //자동 생성되는 아이디가 화면에 반영되지 않으므로 아예 fetch로 다시 get하는게 나음
    fetchTodos();
  };

  //삭제
  const onRemove = async (id) => {
    api.delete(`/todos/${id} `);
    setTodos(todos.filter((item) => item.id !== id));
  };

  //수정
  const onUpdate = async () => {
    api.patch(`/todos/${targetId}`, {
      title: contents,
    });
    setTodos(
      todos.map((item) =>
        //타입 다름
        item.id == targetId ? { ...item, title: contents } : item,
      ),
    );
    setTargetId("");
    setContents("");
  };

  useEffect(() => {
    //db로 부터 값 가져오기
    fetchTodos();
  }, []);

  return (
    <>
      {/* 수정 */}
      <div>
        <input
          type="text"
          placeholder="수정할 id"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={onUpdate}>수정</button>
      </div>
      <form
        onSubmit={(e) => {
          onSubmitHandler();
          setInputValue({ title: "" });
        }}>
        <input
          type="text"
          value={inputValue.title}
          onChange={(e) => setInputValue({ title: e.target.value })}
        />
        <button type="submit">추가</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <>
            <div key={todo.id}>
              {todo.id} : {todo.title}
            </div>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
