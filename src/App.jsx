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

  // const [isLoading, setIsLoading] = useState(true);
  // setTimeout(() => setIsLoading(false), 2000);
  return (
    <AppProviders>
      <AppRoutes />
      <ToastNotifications />
    </AppProviders>
  );
}

export default App;
