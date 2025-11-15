import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
