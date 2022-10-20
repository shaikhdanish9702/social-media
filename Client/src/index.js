import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from "./store/ReduxStore";
import App from "./App";

// stack overflow
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);