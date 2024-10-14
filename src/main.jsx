import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";
import { ThemeProvider } from "@/components/theme-provider.jsx";
import ActiveLinkContext from "@/context/ActiveLinkContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ActiveLinkContext>
        <App />
      </ActiveLinkContext>
    </ThemeProvider>
  </StrictMode>
);
