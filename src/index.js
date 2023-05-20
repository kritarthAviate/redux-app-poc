import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "src/index.css";
import App from "src/App";
import store from "src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
