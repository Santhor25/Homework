import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./page/WelcomePage";
import { CityGraphProvider } from "./context/CityGraphContext";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CityGraphProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </CityGraphProvider>
    </BrowserRouter>
  </React.StrictMode>
);
