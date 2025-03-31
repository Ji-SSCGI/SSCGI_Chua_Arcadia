import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </StrictMode>
);
