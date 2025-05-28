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
      <title>CSU: Patient dashboard</title>
      <meta
        name="description"
        content="User-friendly patient dashboard providing secure access to medical records, prescriptions, appointment scheduling, lab results, and direct communication with healthcare providers—all in one convenient platform."
      />
      <link rel="canonical" href="/patient" />

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
