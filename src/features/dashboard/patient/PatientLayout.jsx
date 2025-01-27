import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import Loader from "../../../ui/Loader";
import { Outlet } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";

function DashboardLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);

  setTimeout(() => setIsLoading(false), 2000);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Header setShowbar={setShowbar} setMinbar={setMinbar} />
          <Sidebar minbar={minbar} showbar={showbar}>
            <PatientSidebar />
          </Sidebar>
          <main>
            <Outlet />
          </main>
        </>
      )}{" "}
    </>
  );
}

export default DashboardLayout;
