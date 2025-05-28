import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";
import { useAuth } from "../../../context/AuthContext";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(false);
  const [minbar, setMinbar] = useState(false);
  const { isProfileCompleted } = useAuth();

  return (
    <>
      <title>CSU: Doctor dashboard</title>
      <meta
        name="description"
        content="Intuitive physician dashboard with secure access to patient records, appointment schedules, clinical notes and clinical workflows, enhancing patient care efficiency."
      />
      <link rel="canonical" href="/doctor" />

      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/doctor/dashboard"}
      />

      {isProfileCompleted && (
        <Sidebar minbar={minbar} showbar={showbar}>
          <DoctorSidebar setShowbar={setShowbar} />
        </Sidebar>
      )}
      <main className={minbar ? "mini-sidebar" : ""}>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
