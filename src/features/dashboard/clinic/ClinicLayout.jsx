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
