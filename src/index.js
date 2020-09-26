import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.jsx";
import { UserProvider } from "./context/Provider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
