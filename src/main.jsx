import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NGORegistrationPage from "./pages/NgoRegister";
import NGOLoginPage from "./components/auth/NgoLogin.jsx";
import NgoManagement from "./pages/NgoManagement.jsx";
import ReportIncidentPage from "./pages/ReportIncidentPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/report-incident" element={<ReportIncidentPage />} />
        <Route path="/ngo-login" element={<NGOLoginPage />} />
        <Route path="/register-ngo" element={<NGORegistrationPage />} />
        <Route path="/ngo-management" element={<NgoManagement />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
