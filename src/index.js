import React from "react";
import ReactDOM from "react-dom";
import Ant from "./Ant";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Ant />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
