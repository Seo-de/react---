import Button from "./Button";
import styles from "./App.module.css";
/* 오직 한 번만 실행하게 만들고 싶은 경우 : useEffect */
// 컴포넌트가 처음 실행될 때만 하게 하고 싶을 때
// -> api로 불러올 때 state가 변화해도 변하지 않아도 될 경우 사용 그 후에는 render되지 않게
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => setKeyword(e.target.value);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return timeOut;
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("i run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);

  // useEffect(() => {
  //   console.log("I run only once....");
  // }, []);

  // useEffect(() => {
  //   if (keyword !== "" && keyword.length >= 5) {
  //     console.log("I run when 'keyword' changes");
  //   }
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("I run when 'keyword' changes");
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("I run when 'counter' changes");
  // }, [counter]);
  // useEffect(() => {
  //   console.log("I run when keyword & counter changes");
  // }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
