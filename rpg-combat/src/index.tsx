import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./css/index.css";
import App from "./ts/App";
import { store } from "./ts/redux-common/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
