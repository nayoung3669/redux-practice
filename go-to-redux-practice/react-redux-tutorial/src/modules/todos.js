const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = (input) => {
  return { type: CHANGE_INPUT, input };
};

let id = 3;
export const insert = (text) => {
  return {
    type: INSERT,
    todo: {
      id: id++,
      text,
      done: false,
    },
  };
};

export const toggle = (id) => {
  return { type: TOGGLE, id };
};

export const remove = (id) => {
  return { type: REMOVE, id };
};

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "투두리스트 만들기",
      done: true,
    },
    {
      id: 2,
      text: "리덕스 연습하기",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id === action.id),
      };
    default:
      return state;
  }
};

export default todos;
