import { useState } from "react";

import Header from "../../../ui/Header";
import Sidebar from "../../../ui/Sidebar";
import ClinicSidebar from "./ClinicSidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import CompleteClinicProfile from "./Complete-Profile/CompleteClinicProfile";

function DashboardLayout() {
  const [showbar, setShowbar] = useState(true);
  const [minbar, setMinbar] = useState(false);
  const { isProfileCompleted } = useAuth();

  return (
    <>
      <title>CSU: Clinic dashboard</title>
      <meta
        name="description"
        content="Comprehensive clinic dashboard offering real-time access to appointments, patient records, doctor schedules, and performance analytics—empowering clinics to deliver efficient and organized healthcare services."
      />
      <link rel="canonical" href="/clinic" />

      <Header
        setShowbar={setShowbar}
        setMinbar={setMinbar}
        url={"/clinic/dashboard"}
      />
      {true && (
        <Sidebar minbar={minbar} showbar={showbar}>
          <ClinicSidebar setShowbar={setShowbar} minbar={minbar} />
        </Sidebar>
      )}
      <main className={minbar ? "mini-sidebar" : ""}>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
