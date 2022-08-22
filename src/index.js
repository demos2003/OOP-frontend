import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {
  ContextProvider,
  ContextProviderA,
} from "./Components/context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ContextProviderA>
        <App />
      </ContextProviderA>
    </ContextProvider>
  </React.StrictMode>
);
