import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.js";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
