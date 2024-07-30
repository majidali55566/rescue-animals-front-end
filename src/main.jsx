// main.jsx (or index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NGORegistrationPage from "./pages/NgoRegister";
import NGOLoginPage from "./components/auth/NgoLogin.jsx";
import NgoManagement from "./pages/NgoManagement.jsx";
import ReportIncidentPage from "./pages/ReportIncidentPage.jsx";
import AdminLayout from "./components/admin/Layouts/AdminLayout.jsx";
import AdminHomePage from "./components/admin/AdminHomePage.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/them.js"; // Import the theme you created

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/report-animal-incident"
            element={<ReportIncidentPage />}
          />
          <Route path="/ngo-login" element={<NGOLoginPage />} />
          <Route path="/register-ngo" element={<NGORegistrationPage />} />
          <Route path="/ngo-management" element={<NgoManagement />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="home" element={<AdminHomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
