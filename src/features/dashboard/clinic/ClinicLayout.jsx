import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import ClinicSidebar from "./ClinicSidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);

  return (
    <>
      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/clinic/dashboard"}
      />

      <Sidebar minbar={minbar} showbar={showbar}>
        <ClinicSidebar minbar={minbar} />
      </Sidebar>

      <main className={minbar ? "mini-sidebar" : ""}>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
