// main.jsx (or index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/them.js"; // Import the theme you created
import AppRoutes from "./AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
