import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { Outlet } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";
import { useAuth } from "../../../context/AuthContext";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);
  const { isProfileCompleted } = useAuth();

  return (
    <>
      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/patient/dashboard"}
      />
      <>
        {isProfileCompleted && (
          <Sidebar minbar={minbar} showbar={showbar}>
            <PatientSidebar />
          </Sidebar>
        )}
        <main className={minbar ? "mini-sidebar" : ""}>
          <Outlet />
        </main>
      </>
    </>
  );
}

export default DashboardLayout;
