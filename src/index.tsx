import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RootStore, StoreContext } from "./components/mobXstore/rootStore";

ReactDOM.render(
    <StoreContext.Provider value={new RootStore()}>
      <App />
    </StoreContext.Provider>,
  document.getElementById("root")
);
