import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [choice, setChoice] = React.useState(-1);
  const [startPageNumber, setStartPageNumber] = React.useState(1);
  const onClick = () => {
    setCounter(counter + 1);
  };

  function pageNum(n) {
    return (
      <div
        onClick={() => {
          setChoice(n);
        }}
        style={{ color: choice === n ? "red" : "black" }}
      >
        {n}
      </div>
    );
  }

  function pageGen(n) {
    let res = [];
    for (let i = startPageNumber; i <= n; i++) {
      res.push(pageNum(pageNum(i)));
    }
    return res;
  }

  return (
    <div className="App">
      <h3>Total clicks: {counter}</h3>{" "}
      <button
        onClick={onClick}
        style={{ backgroundColor: counter % 2 === 0 ? "red" : "blue" }}
      >
        Click me{" "}
      </button>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        <button
          onClick={() => {
            if (startPageNumber - 9 < 1) {
              setStartPageNumber(1);
            } else {
              setStartPageNumber((currentNumber) => currentNumber - 10);
            }
          }}
        >
          왼쪽
        </button>
        {pageGen(startPageNumber + 9).map((value, index) => {
          return value;
        })}
        <button
          onClick={() => {
            setStartPageNumber((currentNumber) => currentNumber + 10);
          }}
        >
          오른쪽
        </button>
      </div>
      <h1>{choice === -1 ? null : choice}</h1>
    </div>
  );
}

export default App;
