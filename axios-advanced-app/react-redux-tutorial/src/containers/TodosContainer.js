import Todos from "../components/Todos";
import { useSelector } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input, //store의 state 중 todos의 input
    todos: todos.todos, //store의 state 중 todos의 todos
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};

export default TodosContainer;
