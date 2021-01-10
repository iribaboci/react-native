import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <h2>{props.count}</h2>
    </div>
  );
}

// example you can do also it like this
const App2 = function (props) {
  return (
    <div className="App">
      <h2>{props.count}</h2>
    </div>
  );
};
