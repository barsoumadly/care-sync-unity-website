import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { Outlet } from "react-router-dom";
import PatientSidebar from "./PatientSidebar";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);
  return (
    <>
      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/patient/dashboard"}
      />
      <Sidebar minbar={minbar} showbar={showbar}>
        <PatientSidebar />
      </Sidebar>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
