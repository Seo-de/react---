import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";

function MinutesToHours() {
  // minutes의 default값을 React.useState(0)로 0으로 해줬어
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  // const [hours, setHours] = React.useState();

  const onChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
    // divBox(Math.round(event.target.value / 60));
  };

  // const divBox = (hours) => {
  //   let arr = [];
  //   for (let i = 0; i < hours; i++) {
  //     arr.push(i);
  //   }
  //   console.log(arr);
  //   arr.map(function () {
  //     return React.createElement("div");
  //   });
  // };

  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <div>
      <div>
        {/* for는 자바스크립트 용어라서 for를 못쓴데. 그래서 htmlFor로 적어준데!! */}
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          // disabled={inverted === true}
          disabled={inverted}
        />
      </div>
      <h4>You want to convert : {amount}</h4>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          // value={minutes / 60}
          // Math.round를 사용해서 쓸수도 있다는데 반올림을 시켜서 원하는 값이 정확히 안나와
          // value={flipped ? amount : Math.round(amount / 60)}
          // 원하는 소수점 자리까지 출력하게 해주는 함수 (값).toFixed(소수점자리수)
          // 방법 1.
          // value={flipped ? amount : Math.round((amount / 60) * 10) / 10}
          // 방법 2.
          value={inverted ? amount : (amount / 60).toFixed(1)}
          placeholder="Hours"
          type="number"
          onChange={onChange}
          // disabled={inverted === false}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
      {/* <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></div> */}
    </div>
  );
}
function KmToMiles() {
  return <h3>KM 2 M</h3>;
}
function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  console.log(index);
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {/* {}안에 작성하면 JS를 작성할 수 있대. 안그럼 그냥 텍스트로 나오게 된대.*/}
      {index === "xx" ? "Please choose your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}
export default App;
