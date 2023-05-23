import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";
import PropTypes from "prop-types";

// 여러개의 버튼을 만들게 되면 코드가 중복 되니까 Btn이라는
// 컴포넌트를 만들어준거야

function Btn({ text, fontSize = 12 }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
    >
      {text}
    </button>
  );
}
Btn.propTypes = {
  /* props가 어떤 모양이고 타입인지 */
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};
function App() {
  return (
    <div>
      <Btn text="Save Chanages" fontSize={18} />
      <Btn text={"Continnue"} />
    </div>
  );
}
export default App;
