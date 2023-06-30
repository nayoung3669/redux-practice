const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div style={{ margin: "10px" }}>
      <h3>{todo}예제텍스트</h3>
      <button onClick={onToggle}>DONE</button>
      <button onClick={onRemove}>REMOVE</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>TodoList</h1>
      <input type="text" />
      <button>등록</button>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </form>
  );
};

export default Todos;
