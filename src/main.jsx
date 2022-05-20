import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AutoFetch from "./AutoFetch";
import "./index.css";
import store from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/autofetch" element={<AutoFetch />} />
        </Routes>
      </Router>
    </ReduxProvider>
  </React.StrictMode>
);
