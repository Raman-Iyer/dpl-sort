import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-[100vh] w-[100vw] bg-background">
      <App />
    </div>
  </StrictMode>
);
