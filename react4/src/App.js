import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    /* 이 state는 항상 새 []여야 한대 
      '...배열'을 써주면 배열의 있는 모든 element들을 하나씩 꺼내온대*/
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* toDos를 arr에 있는 아이템을 내가 원하는 값으로 바꿔서 map에 넣는다 */}
        {toDos.map((item, index) => (
          /* map에 넣었기 때문에 key값이 필요해서 index 값을 넣어줌 */
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
