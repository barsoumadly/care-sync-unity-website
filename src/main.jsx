import ReactDOM from "react-dom/client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/feather.css";

import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
