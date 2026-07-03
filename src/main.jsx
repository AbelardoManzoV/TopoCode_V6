import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SmoothScroll } from "./components/providers/SmoothScroll.jsx";
import { ThemeProvider } from "./components/providers/ThemeProvider.jsx";
import { LanguageProvider } from "./components/providers/LanguageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
