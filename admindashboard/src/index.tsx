import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Store } from "./store/store";
import { Provider } from "react-redux";
const AppWrapper = ({ children }:any) => {
  return <Provider store={Store}>{children}</Provider>;
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);


