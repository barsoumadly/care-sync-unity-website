import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./Header.jsx";
import Loader from "../ui/Loader";
import Sidebar from "./Sidebar.jsx";
import DashboardBox from "./DashboardBox.jsx";

function DashboardLayout() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <DashboardBox />
          <main>
            <Outlet />
          </main>
        </>
      )}{" "}
    </div>
  );
}

export default DashboardLayout;
