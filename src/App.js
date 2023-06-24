import { useSelector } from "react-redux";

function App() {
  //store에 접근해 counter의 값을 읽어오기
  //useSelector hook 이용
  const data = useSelector((state) => {
    return state;
  });

  console.log(data);

  return <div className="App"></div>;
}

export default App;
