import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Loader from "../ui/Loader";
import { useState } from "react";

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
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}{" "}
    </div>
  );
}

export default DashboardLayout;
