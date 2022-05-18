import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DictProvider } from "./context/DictContext";

ReactDOM.render(
  <React.StrictMode>
    <DictProvider>
      <App />
    </DictProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
