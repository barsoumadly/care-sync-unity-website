import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function DashboardLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
