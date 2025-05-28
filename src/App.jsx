import { useEffect } from "react";
import { logoutAllTabs } from "./services/auth";

import AppProviders from "./providers/AppProviders";
import AppRoutes from "./providers/AppRoutes";
import ToastNotifications from "./providers/ToastNotifications ";

function App() {
  window.addEventListener(`contextmenu`, (e) => e.preventDefault());
  useEffect(() => {
    logoutAllTabs();
  }, []);
  return (
    <AppProviders>
      <AppRoutes />
      <ToastNotifications />
    </AppProviders>
  );
}

export default App;
