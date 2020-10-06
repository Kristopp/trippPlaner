import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Store from "./context/Store";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
