// React application entry point
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// Mount the App into the root DOM node
const rootNode = ReactDOM.createRoot(document.getElementById("root"));
rootNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
