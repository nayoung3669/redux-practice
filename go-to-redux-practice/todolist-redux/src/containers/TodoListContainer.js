import { styled } from "styled-components";

const ListBlock = styled.div`
  width: 90%;
  border-bottom: 1px solid lightgray;
  .progress {
    padding-left: 20px;
    margin-top: 30px;
    font-size: 1.5rem;
    text-align: start;
  }
  .todos {
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  .todos:nth-child(even) {
    //색깔 랜덤으로 바꿀지?
    background-color: #f6f6f6;
  }
`;

const workingText = "Working...✍🏻";
const doneText = "Done ! 🎉";

const TodoListContainer = () => {
  return (
    <>
      <ListBlock>
        <p className="progress">{workingText}</p>
        <div className="todos"></div>
      </ListBlock>
      <ListBlock>
        <p className="progress">{doneText}</p>
        <div className="todos"></div>
      </ListBlock>
    </>
  );
};

export default TodoListContainer;
