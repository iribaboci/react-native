import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let count = 1;

const rootElement = document.getElementById("root");

setInterval(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <App count={count++} />
      </React.StrictMode>,
      rootElement
    ),
  1000
);
