import React from "react";
import ReactDOM from "react-dom";
import Ant from "./Ant";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
