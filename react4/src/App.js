import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    // 자주 사용하지는 않는대.
    return byFn;
  }
  // useEffect(hiFn, []);

  // 위의 코드를 다르게 작성해본 코드
  // 방법 1.
  useEffect(() => {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  // 방법 2.
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* showing이면 <hello />를 보여주고 아니면 null */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
