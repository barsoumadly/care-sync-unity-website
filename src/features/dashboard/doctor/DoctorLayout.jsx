import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);

  return (
    <>
      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/doctor/dashboard"}
      />
      <Sidebar minbar={minbar} showbar={showbar}>
        <DoctorSidebar />
      </Sidebar>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
