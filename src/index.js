import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Store from "./context/Store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);
