
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { PrivacyPage } from "./app/PrivacyPage.tsx";
  import "./styles/index.css";

  const pathname = window.location.pathname;
  const isPrivacyPage = pathname === "/privacy" || pathname === "/privacy.html";

  createRoot(document.getElementById("root")!).render(
    isPrivacyPage ? <PrivacyPage /> : <App />
  );
  
