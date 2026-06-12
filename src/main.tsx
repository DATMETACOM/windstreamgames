
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { AccountDeletionPage } from "./app/AccountDeletionPage.tsx";
  import { PrivacyPage } from "./app/PrivacyPage.tsx";
  import { TermsPage } from "./app/TermsPage.tsx";
  import "./styles/index.css";

  const pathname = window.location.pathname;
  const isAccountDeletionPage =
    pathname === "/account-deletion" || pathname === "/account-deletion.html";
  const isPrivacyPage = pathname === "/privacy" || pathname === "/privacy.html";
  const isTermsPage = pathname === "/terms" || pathname === "/terms.html";

  createRoot(document.getElementById("root")!).render(
    isAccountDeletionPage ? (
      <AccountDeletionPage />
    ) : isPrivacyPage ? (
      <PrivacyPage />
    ) : isTermsPage ? (
      <TermsPage />
    ) : (
      <App />
    )
  );
