import ReactDOM from "react-dom/client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/feather.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
