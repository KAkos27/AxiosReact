import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebshopContextProvider } from "./store/webshop-context.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebshopContextProvider>
      <App />
    </WebshopContextProvider>
  </StrictMode>
);
